import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../constants';

@Injectable({ providedIn: 'root' })
export class ApiService {
	constructor(private httpClient: HttpClient) {}

	getAllGroups() {
		return this.httpClient.get(`${BASE_URL}/group`);
	}

	getAllGroupMessages(groupId: String) {
		return this.httpClient.get(BASE_URL + `api/chat/group/${groupId}`);
	}
/*
	sendMessages(groupId: String, data: Array<IMessage>) {
		return this.httpClient.post(
			BASE_URL + `api/chat/group/${groupId}/send`,
			data
		);
    }
    */
}
