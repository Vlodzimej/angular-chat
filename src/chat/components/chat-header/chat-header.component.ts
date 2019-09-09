import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'chat-header',
	templateUrl: 'chat-header.component.html',
	styleUrls: ['chat-header.component.scss'],
})
export class ChatHeaderComponent implements OnInit {
	constructor() {}
	faTimes = faTimes;
	title = 'Бизнес-чат';
	ngOnInit() {}
}
