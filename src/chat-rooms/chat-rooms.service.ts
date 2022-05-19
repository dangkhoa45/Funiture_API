import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import {
  ChatDocument,
  ChatRoom,
} from './schema/chat-room.schema';

@Injectable()
export class ChatRoomsService {

  constructor(@InjectModel(ChatRoom.name) private chatRoomModel: Model<ChatDocument>) { }

  create(createChatRoomDto: CreateChatRoomDto) {
    const data = new this.chatRoomModel(createChatRoomDto);
    return data.save();
  }

  findAll() {
    return this.chatRoomModel.find().populate('user');
  }

  findOne(_id: string) {
    return this.chatRoomModel.findById(_id).populate('user');
  }

  update(_id: string, text: string) {
    return this.chatRoomModel.findByIdAndUpdate(_id, { $push: { message: text } });
  }

  remove(_id: string) {
    return this.chatRoomModel.findByIdAndRemove(_id);
  }
}
