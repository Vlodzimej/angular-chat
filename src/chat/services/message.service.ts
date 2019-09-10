import { Injectable } from '@angular/core';
import { BASE_URL } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Message } from '../stores/message.store';

@Injectable()
export class MessageService {
	constructor(private httpClient: HttpClient) {}

	getMessagesByGroupId(groupId: String) {
		return this.httpClient
			.get(`${BASE_URL}/messages?groupId=${groupId}`)
			.toPromise<any>();
	}

	sendMessage(data: Message) {
		console.log(data);
		return this.httpClient.post(`${BASE_URL}/messages`, data);
	}
}
