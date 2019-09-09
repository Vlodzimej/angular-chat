import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss', '../assets/styles/normalize.css'],
})
export class AppComponent {
	showChatModal: boolean = false;
	openChatModal(): void {
		this.showChatModal = true;
	}
}
