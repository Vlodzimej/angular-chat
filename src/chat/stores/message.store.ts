import { Injectable } from '@angular/core';
import { action, observable } from 'mobx';
import { MessageService } from '../services/message.service';

export class Message {
	constructor(
		public id: String,
		public groupId: String,
		public selfMsg: boolean,
		public sender: Sender,
		public dateTimeCreate: String,
		public text: String,
		public file: String
	) {}
}

export class Sender {
	constructor(
		public name: String,
		public position: String,
		public orgName: String
	) {}
}

@Injectable()
export class MessageStore {
	@observable messages: Message[] = [];

	constructor(private messageService: MessageService) {}

	@action async getMessagesByGroupId(groupId: String) {
		this.messages = await this.messageService.getMessagesByGroupId(groupId);
	}

	@action addMessage(data: Message) {
		this.messages.push(data);
	}
}
