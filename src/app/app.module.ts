import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatModule } from '../chat/chat.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, FormsModule, ChatModule, HttpClientModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
