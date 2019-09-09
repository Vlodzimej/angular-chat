import { Component, OnInit } from '@angular/core';
import { GroupMaker, IGroup } from '../../models';
import {
	faArrowRight,
	faCommentDots,
	faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'chat-group-list',
	templateUrl: 'chat-group-list.component.html',
	styleUrls: ['chat-group-list.component.scss'],
})
export class ChatGroupListComponent implements OnInit {
    constructor() {}
    
	faArrowRight = faArrowRight;
	faCommentDots = faCommentDots;
    faExclamationTriangle = faExclamationTriangle;
    
	public groups: IGroup[] = [];
	items: String[] = [];
	public title = 'Продукты';
	ngOnInit() {
		this.items = ['123'];
		this.groups = [
			GroupMaker.create({
				id: '1',
				name: 'Маркетплейс ВБЦ',
				numb: 'БГ(№345678)',
				date: '21.06',
				time: '10:40',
				amountMsg: 3,
				amountWarn: 1,
			}),
			GroupMaker.create({
				id: '2',
				name: 'Тестовая группа',
				numb: '987654',
				date: '21.06',
				time: '10:42',
				amountMsg: 1,
				amountWarn: 0,
			}),
		];
	}
}
