import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from '@angular/common/http';

import {
	ChatSideMenuComponent,
	ChatHeaderComponent,
	ChatMainViewComponent,
	ChatGroupListComponent,
	ChatGroupItemComponent,
	ChatMessageListComponent,
	ChatMessageItemComponent,
	ChatControlComponent,
} from './components';

import { ChatModalService, GroupService, MessageService } from './services';

import { GroupStore, MessageStore } from './stores';


@NgModule({
	imports: [CommonModule, FormsModule, FontAwesomeModule],
	declarations: [
		ChatComponent,
		ChatSideMenuComponent,
		ChatHeaderComponent,
		ChatMainViewComponent,
		ChatGroupListComponent,
		ChatGroupItemComponent,
		ChatMessageListComponent,
		ChatMessageItemComponent,
		ChatControlComponent,
	],
	providers: [
		ChatModalService,
		HttpClient,
		GroupStore,
		GroupService,
		MessageStore,
		MessageService,
	],
	exports: [ChatComponent],
})
export class ChatModule {}
