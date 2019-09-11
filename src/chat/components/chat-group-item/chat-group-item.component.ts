import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

/** Элемент списка групп */
export class ChatGroupItemComponent {
	@Input() group: Group;

	faArrowRight = faArrowRight;
	faCommentDots = faCommentDots;
	faExclamationTriangle = faExclamationTriangle;
}
