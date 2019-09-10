import { Injectable } from '@angular/core';
import { action, observable } from 'mobx';
import { GroupService } from '../services/group.service';

export class Group {
	constructor(
		public id: String,
		public numb: String,
		public name: String,
		public date: String,
		public time: String,
		public amountMsg: Number,
		public amountWarn: Number
	) {}
}

@Injectable()
export class GroupStore {
	@observable groups: Group[] = [];

	constructor(private _groupService: GroupService) {}

	@action async getGroups() {
		this.groups = await this._groupService.getGroups();
	}

	@action addGroup({
		id,
		numb,
		name,
		date,
		time,
		amountMsg,
		amountWarn,
	}: Partial<Group>) {
		this.groups = [
			...this.groups,
			new Group(id, numb, name, date, time, amountMsg, amountWarn),
		];
	}
}
