import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../stores/group.store';

@Component({
	selector: 'chat-group-list',
	templateUrl: 'chat-group-list.component.html',
	styleUrls: ['chat-group-list.component.scss'],
})
export class ChatGroupListComponent implements OnInit {
	@Input() groups: Group[] = [];
	public title = 'Продукты';

	constructor() {}

	ngOnInit() {}
}
