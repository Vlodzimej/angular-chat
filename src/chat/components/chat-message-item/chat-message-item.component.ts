import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../stores/message.store';

@Component({
	selector: 'chat-message-item',
	templateUrl: 'chat-message-item.component.html',
	styleUrls: ['chat-message-item.component.scss'],
})

/** Элемент отображения сообщения */
export class ChatMessageItemComponent implements OnInit {
	@Input() message: Message;
	public time: String = '';

	ngOnInit() {
		this.time = this.getTime();
	}

	getTime() {
		const date = new Date(this.message.dateTimeCreate.toString());
		return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	}
}
