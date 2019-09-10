import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { fromMobx } from 'ngx-mobx';
import { Group, GroupStore } from '../../stores/group.store';
@Component({
	selector: 'chat-sidemenu',
	templateUrl: 'chat-sidemenu.component.html',
})
export class ChatSideMenuComponent implements OnInit {
	public groups: Observable<Group[]>;
	constructor(private _groupStore: GroupStore) {}

	ngOnInit() {
		this._groupStore.getGroups();
		this.groups = fromMobx(() => this._groupStore.groups);
	}
}
