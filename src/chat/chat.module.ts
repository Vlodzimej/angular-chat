import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';

@NgModule({
    imports: [FormsModule],
    declarations: [ChatComponent],
    exports: [ChatComponent]
})
export class ChatModule {}
