import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { fromMobx } from 'ngx-mobx';
import { Group, GroupStore } from '../../stores/group.store';
import { MessageStore } from '../../stores/message.store';
@Component({
	selector: 'chat-sidemenu',
	templateUrl: 'chat-sidemenu.component.html',
})
export class ChatSideMenuComponent implements OnInit {
	public groups: Observable<Group[]>;
	constructor(
		private _groupStore: GroupStore,
		private _messageStore: MessageStore
	) {}

	ngOnInit() {
		this._groupStore.getGroups();
		this.groups = fromMobx(() => this._groupStore.groups);
	}

	selectGroup(groupId: String) {
        console.log(groupId);
        this._messageStore.getMessagesByGroupId(groupId);
	}
}
