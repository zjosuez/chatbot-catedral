import { Component } from '@angular/core';
import { CatedralIconComponent } from "../../icons/catedral-icon/catedral-icon.component";
import { ArrowLeftComponent } from "../../icons/arrow-left/arrow-left.component";

@Component({
    selector: 'app-chat-text',
    standalone: true,
    templateUrl: './chat-text.component.html',
    styleUrl: './chat-text.component.scss',
    imports: [CatedralIconComponent, ArrowLeftComponent]
})
export class ChatTextComponent {

}
