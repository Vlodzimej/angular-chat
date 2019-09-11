import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { fromMobx } from 'ngx-mobx';
import { MessageStore, Message } from '../../stores/message.store';
@Component({
	selector: 'chat-mainview',
	templateUrl: 'chat-mainview.component.html',
	styleUrls: ['chat-mainview.component.scss'],
})

/** Элемент отображения сообщения и элементов управления */
export class ChatMainViewComponent implements OnInit {

	public messages: Observable<Message[]>;
	constructor(private messageStore: MessageStore) {}

	ngOnInit() {
		this.messages = fromMobx(() => this.messageStore.messages);
	}
}
