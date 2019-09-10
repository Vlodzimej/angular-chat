import { Component, OnInit, ElementRef } from '@angular/core';
import { ChatModalService } from './services/chat.modal.service';
import { ApiService } from './services/api.service';

@Component({
	selector: 'chat',
	templateUrl: 'chat.component.html',
	styleUrls: ['chat.component.scss'],
})
export class ChatComponent implements OnInit {
	public isVisible = false;
	constructor(
		private chatModalService: ChatModalService,
		private apiService: ApiService,
	) {}

	ngOnInit() {
		this.chatModalService.addModal(this);
	}

	toggleModal() {
		this.isVisible = !this.isVisible;
	}
}
