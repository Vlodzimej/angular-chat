import { Component, OnInit } from '@angular/core';
import { ChatModalService } from '../chat/services/chat.modal.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss', '../assets/styles/normalize.css'],
})
export class AppComponent {
	constructor(private chatModalService: ChatModalService) {
		this.isShowChatModal = chatModalService.isVisible;
	}
	isShowChatModal = false;
	
	toggleChat(): void {
		this.chatModalService.toggleModal();
	}
}
