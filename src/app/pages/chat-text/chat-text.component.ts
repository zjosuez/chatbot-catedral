import { Component } from '@angular/core';
import { CatedralIconComponent } from '../../icons/catedral-icon/catedral-icon.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';
import { MessageService } from '../../services/message.service';
import { MessageResponse } from '../../types/message-response.type';
import { StorageService } from '../../services/storage.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VectorRightComponent } from "../../icons/vector-right/vector-right.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-chat-text',
    standalone: true,
    templateUrl: './chat-text.component.html',
    styleUrl: './chat-text.component.scss',
    providers: [MessageService, StorageService],
    imports: [
        CatedralIconComponent,
        ArrowLeftComponent,
        ChatSuggestionsComponent,
        CommonModule,
        ChatDialogComponent,
        VectorRightComponent,
        ReactiveFormsModule
    ]
})
export class ChatTextComponent {
  chatForm!: FormGroup;

  constructor(
    private service: MessageService,
    private storageService: StorageService,
    private router: Router,
  ) {
    this.chatForm = new FormGroup({
      message: new FormControl('', [Validators.required])
    });
  }

  questions: Message[] = JSON.parse(
    this.storageService.getItem('questions') ?? '[]',
  );

  submit(){
    this.sendQuestion(this.chatForm.value.message);
    this.chatForm.reset();
  }

  updateLocalStorage() {
    this.storageService.setItem('questions', JSON.stringify(this.questions));
  }

  sendQuestion(question: string) {
    this.questions.push({
      type: 'request',
      message: question,
    });
    this.updateLocalStorage();
    this.sendMessage(question);
  }

  sendMessage(message: string) {
    this.service.sendData(message).subscribe({
      next: (body: MessageResponse) => {
        this.questions.push({
          type: 'response',
          message: body.response,
        });
        this.updateLocalStorage();
      },
    });
  }

  return() {
    this.router.navigate(['']);
  }
}
