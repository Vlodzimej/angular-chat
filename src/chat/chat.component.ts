import { Component, OnInit, ElementRef } from '@angular/core';
import { ChatModalService } from './services/chat.modal.service';

@Component({
	selector: 'chat',
	templateUrl: 'chat.component.html',
	styleUrls: ['chat.component.scss'],
})
export class ChatComponent implements OnInit {
	public isVisible = false;
	constructor(private chatModalService: ChatModalService) {}

	ngOnInit() {
		this.chatModalService.addModal(this);
	}

	toggleModal() {
		this.isVisible = !this.isVisible;
	}
}
