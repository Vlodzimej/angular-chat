import { Component, OnInit } from '@angular/core';
import {
    faPaperclip,
    faPlusSquare,
    faEdit,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

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
    constructor() { }

    ngOnInit() { }
}