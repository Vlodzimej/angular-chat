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

@NgModule({
	imports: [CommonModule, FormsModule, FontAwesomeModule],
	declarations: [
		ChatComponent,
		ChatSideMenuComponent,
		ChatHeaderComponent,
		ChatMainViewComponent,
		ChatGroupListComponent,
	],
	exports: [ChatComponent],
})
export class ChatModule {}
