import { Component, OnInit, Input } from '@angular/core';
import {
	faArrowRight,
	faCommentDots,
	faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { Group } from '../../stores/group.store';

@Component({
	selector: 'chat-group-item',
	templateUrl: 'chat-group-item.component.html',
	styleUrls: ['chat-group-item.component.scss'],
})
export class ChatGroupItemComponent implements OnInit {
	@Input() group: Group;

	faArrowRight = faArrowRight;
	faCommentDots = faCommentDots;
	faExclamationTriangle = faExclamationTriangle;

	constructor() {}

	ngOnInit() {}
}
