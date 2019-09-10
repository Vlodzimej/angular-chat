import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../stores/message.store';

@Component({
	selector: 'chat-message-list',
	templateUrl: 'chat-message-list.component.html',
	styleUrls: ['chat-message-list.component.scss'],
})
export class ChatMessageListComponent implements OnInit {
	@Input() messages: Message[] = [];
	constructor() {}

	ngOnInit() {}
}
