import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Group } from '../../stores/group.store';

@Component({
	selector: 'chat-group-list',
	templateUrl: 'chat-group-list.component.html',
	styleUrls: ['chat-group-list.component.scss'],
})

/** Список групп */
export class ChatGroupListComponent {
	@Input() groups: Group[] = [];
	@Output() select = new EventEmitter();
	
	public title = 'Продукты';
}
