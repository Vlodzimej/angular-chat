import { Component, OnInit } from '@angular/core';
import {
    faPaperclip,
    faPlusSquare,
    faEdit,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { MessageService } from '../../services/message.service';
import { MessageStore, Message } from '../../stores/message.store';

@Component({
    selector: 'chat-control',
    templateUrl: 'chat-control.component.html',
	styleUrls: ['chat-control.component.scss'],
})

export class ChatControlComponent implements OnInit {
    faPaperclip = faPaperclip;
    faPlusSquare = faPlusSquare;
    faEdit = faEdit;
    faArrowRight = faArrowRight;
    public textMessage: String = '';
    constructor(private _messageService: MessageService, private messageStore: MessageStore) { }

    onSend() {
        const data: Message = {
            id: null,
			groupId: "1",
			selfMsg: true,
			text: this.textMessage,
			sender: {
				name: 'Иванов Петр Сергеевич',
				position: 'Менеджер',
				orgName: 'ООО ВБЦ',
            },
            dateTimeCreate: "10.10.2019",
            file: null
		}
        this.messageStore.addMessage(data);
        this._messageService.sendMessage(data).subscribe();
    }
    ngOnInit() { }
}