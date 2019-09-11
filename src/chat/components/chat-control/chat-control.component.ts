import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';
import {
	faPaperclip,
	faPlusSquare,
	faEdit,
	faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { MessageService } from '../../services/message.service';
import { MessageStore, Message } from '../../stores/message.store';

@Component({
	selector: 'chat-control',
	templateUrl: 'chat-control.component.html',
	styleUrls: ['chat-control.component.scss'],
})

/** Элементы управления чатом */
export class ChatControlComponent implements OnInit {
	faPaperclip = faPaperclip;
	faPlusSquare = faPlusSquare;
	faEdit = faEdit;
	faArrowRight = faArrowRight;

	public textMessage: String = '';

	constructor(
		private messageService: MessageService,
		private messageStore: MessageStore
	) {}

	onSend() {
        if(this.textMessage.length == 0) return;
        
		const data: Message = {
			id: null,
			groupId: '1',
			selfMsg: true,
			sender: {
				name: 'Иванов Петр Сергеевич',
				position: 'Менеджер',
				orgName: 'ООО ВБЦ',
			},
			dateTimeCreate: '2019-07-19T11:41:37.829+03:00',
			text: this.textMessage,
			file: null,
        };

		this.messageStore.addMessage(data);
		this.messageService.sendMessage(data).subscribe(() => {
			const list = document.querySelector('.chat-message-list');
			list.scrollTop = list.scrollHeight;
		});
	}
	ngOnInit() {}
}
