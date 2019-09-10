import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import {
	ChatSideMenuComponent,
	ChatHeaderComponent,
	ChatMainViewComponent,
	ChatGroupListComponent,
} from './components';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatModalService } from './services/chat.modal.service';
import { ApiService } from './services/api.service';
import { HttpClient } from '@angular/common/http';
import { ChatGroupItemComponent } from './components/chat-group-item/chat-group-item.component';
import { GroupService } from './services/group.service';
import { GroupStore } from './stores/group.store';

@NgModule({
	imports: [CommonModule, FormsModule, FontAwesomeModule],
	declarations: [
		ChatComponent,
		ChatSideMenuComponent,
		ChatHeaderComponent,
		ChatMainViewComponent,
		ChatGroupListComponent,
		ChatGroupItemComponent,
	],
	providers: [
		ChatModalService,
		HttpClient,
		ApiService,
		GroupStore,
		GroupService,
	],
	exports: [ChatComponent],
})
export class ChatModule {}
