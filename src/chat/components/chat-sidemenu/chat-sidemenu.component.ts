import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { fromMobx } from 'ngx-mobx';
import { Group, GroupStore } from '../../stores/group.store';
import { MessageStore } from '../../stores/message.store';
@Component({
	selector: 'chat-sidemenu',
	templateUrl: 'chat-sidemenu.component.html',
})

/** Боковая панель с отображением заголовка и списка групп */
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

	/** Выбор группы */
	onSelectGroup(groupId: String) {
        this._messageStore.getMessagesByGroupId(groupId);
	}
}
