import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ChatModalService } from '../../services/chat.modal.service';

@Component({
	selector: 'chat-header',
	templateUrl: 'chat-header.component.html',
	styleUrls: ['chat-header.component.scss'],
})

/** Заголовок окна чата */
export class ChatHeaderComponent {
	constructor(private chatModalService: ChatModalService) {}
	
	faTimes = faTimes;
	title = 'Бизнес-чат';

	onClose() {
		this.chatModalService.toggleModal();
	}
}
