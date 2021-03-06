import { Injectable } from '@angular/core';
import { BASE_URL } from '../constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GroupService {
	constructor(private httpClient: HttpClient) {}

	getGroups() {
		return this.httpClient.get(`${BASE_URL}/group`).toPromise<any>();
	}
}
