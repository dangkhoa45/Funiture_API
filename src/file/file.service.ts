import {
  Request,
  Response,
} from 'express';
import {
  createReadStream,
  statSync,
} from 'fs';
import { Model } from 'mongoose';
import { join } from 'path/posix';

import {
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import {
  File,
  FileDocument,
} from './file.schema';

@Injectable()
export class FileService {
    constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) { }

    async createFile(file: Object): Promise<File> {
        const newFile = new this.fileModel(file);
        return newFile.save();
    }

    async readFile(_id): Promise<any> {
        if (_id) {
            return this.fileModel.findOne({ _id }).populate("createdBy").exec();
        }
        return this.fileModel.find().populate("createdBy").exec();
    }

    async streamFile(_id: string, response: Response, request: Request) {
        try {
            const data = await this.fileModel.findOne({ _id})
            if (!data) {
                throw new NotFoundException(null, 'VideoNotFound')
            }
            const { range } = request.headers;
            if (range) {
                const { _id } = data;
                const filePath = statSync(join(process.cwd(), `./public/${_id}`))
                const CHUNK_SIZE = 1 * 1e6;
                const start = Number(range.replace(/\D/g, ''));
                const end = Math.min(start + CHUNK_SIZE, filePath.size - 1);
                const videoLength = end - start + 1;
                response.status(206)
                response.header({
                    'Content-Range': `bytes ${start}-${end}/${filePath.size}`,
                    'Accept-Ranges': 'bytes',
                    'Content-length': videoLength,
                    'Content-Type': 'video/mp4',
                })
                const fileStream = createReadStream(join(process.cwd(), `./public/${_id}`), { start, end });
                    fileStream.pipe(response);
            } else {
                throw new NotFoundException(null, 'range not found')
            }

        } catch (e) {
            console.error(e)
            throw new ServiceUnavailableException()
        }
    }

    async update(_id, file: File): Promise<File> {
        return await this.fileModel.findByIdAndUpdate(_id, file, { new: true })
    }
    
    async delete(_id): Promise<any> {
        return await this.fileModel.findByIdAndRemove(_id);
    }
}