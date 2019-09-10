import { Injectable } from '@angular/core';

@Injectable()
export class ChatModalService {
	public isVisible: boolean = false;
	public modal: any = null;

	addModal(_modal: any) {
        this.modal = _modal;
	}

	toggleModal(): void {
        this.modal.toggleModal();
	}
}
