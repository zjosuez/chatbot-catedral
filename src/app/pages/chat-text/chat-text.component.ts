import { Component } from '@angular/core';
import { CatedralIconComponent } from "../../icons/catedral-icon/catedral-icon.component";
import { ArrowLeftComponent } from "../../icons/arrow-left/arrow-left.component";
import { ChatSuggestionsComponent } from "../../components/chat-suggestions/chat-suggestions.component";
import { CommonModule } from '@angular/common';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from "../../components/chat-dialog/chat-dialog.component";

@Component({
    selector: 'app-chat-text',
    standalone: true,
    templateUrl: './chat-text.component.html',
    styleUrl: './chat-text.component.scss',
    imports: [CatedralIconComponent, ArrowLeftComponent, ChatSuggestionsComponent, CommonModule, ChatDialogComponent]
})
export class ChatTextComponent {
    questions: Message[] = [];

    sendQuestion(question: string) {
        this.questions.push( {
            type: 'request',
            message: question
        });
    }

}
