import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatModule } from '../chat/chat.module';

@NgModule({
    imports: [BrowserModule, FormsModule, ChatModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
