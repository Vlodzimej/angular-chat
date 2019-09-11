import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Message } from '../../stores/message.store';

@Component({
	selector: 'chat-message-list',
	templateUrl: 'chat-message-list.component.html',
	styleUrls: ['chat-message-list.component.scss'],
})

/** Список сообщений */
export class ChatMessageListComponent {
	@Input() messages: Message[] = [];
}
