import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import {
  Chat,
  ChatDocument,
} from './schema/chat.schema';

@Injectable()
export class ChatsService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<ChatDocument>) {}

  create(createChatDto: CreateChatDto) {
    const createBill = new this.chatModel(createChatDto);
    return createBill.save();
  }

  findAll() {
    return this.chatModel.find().exec();
  }

  findOne(_id: string) {
    return this.chatModel.findById({_id});
  }

  update(_id: string, updateChatDto: UpdateChatDto) {
    return this.chatModel.findByIdAndUpdate(_id, updateChatDto);
  }

  remove(_id: string) {
    return this.chatModel.findByIdAndRemove(_id);
  }
}
