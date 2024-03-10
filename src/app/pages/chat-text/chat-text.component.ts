import { Component } from '@angular/core';
import { CatedralIconComponent } from "../../icons/catedral-icon/catedral-icon.component";
import { ArrowLeftComponent } from "../../icons/arrow-left/arrow-left.component";
import { ChatSuggestionsComponent } from "../../components/chat-suggestions/chat-suggestions.component";
import { CommonModule } from '@angular/common';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from "../../components/chat-dialog/chat-dialog.component";
import { MessageService } from '../../services/message.service';
import { MessageResponse } from '../../types/message-response.type';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'app-chat-text',
    standalone: true,
    templateUrl: './chat-text.component.html',
    styleUrl: './chat-text.component.scss',
    imports: [CatedralIconComponent, ArrowLeftComponent, ChatSuggestionsComponent, CommonModule, ChatDialogComponent],
    providers: [MessageService, StorageService]
})
export class ChatTextComponent {
    constructor(private service: MessageService, private storageService: StorageService) { }

    questions: Message[] = JSON.parse(this.storageService.getItem('questions') ?? "[]");

    updateLocalStorage() {
        this.storageService.setItem('questions', JSON.stringify(this.questions));
    }

    sendQuestion(question: string) {
        this.questions.push({
            type: 'request',
            message: question
        });
        this.updateLocalStorage();
        this.sendMessage(question);
    }

    sendMessage(message: string) {
        this.service.sendData(message).subscribe({
            next: (body: MessageResponse) => {
                this.questions.push({
                    type: 'response',
                    message: body.response
                });
                this.updateLocalStorage();
            }
        });
    }
}
