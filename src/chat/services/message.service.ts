import { Injectable } from '@angular/core';
import { BASE_URL } from '../constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {
	constructor(private httpClient: HttpClient) {}

	getMessagesByGroupId(groupId: String) {
		return this.httpClient
			.get(`${BASE_URL}/messages?groupId=${groupId}`)
			.toPromise<any>();
	}
}
