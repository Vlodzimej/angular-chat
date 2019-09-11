import { Component, OnInit, ElementRef } from '@angular/core';
import { ChatModalService } from './services/chat.modal.service';

@Component({
	selector: 'chat',
	templateUrl: 'chat.component.html',
	styleUrls: ['chat.component.scss'],
})

export class ChatComponent implements OnInit {
	/** Флаг отображения окна */
	public isVisibled = false;
	constructor(private chatModalService: ChatModalService) {}

	ngOnInit() {
		/** Отправляем ссылку на элемент в сервис чата */
		this.chatModalService.addModal(this);
	}
	/**Переключение отображения окна часа */
	toggleModal() {
		this.isVisibled = !this.isVisibled;
	}
}
