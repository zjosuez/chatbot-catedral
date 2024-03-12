import { Component } from '@angular/core';
import { VectorRightComponent } from '../../icons/vector-right/vector-right.component';

@Component({
  selector: 'input-text',
  standalone: true,
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  imports: [VectorRightComponent],
})
export class InputTextComponent {
  sendMessage() {
    console.log('ta clicando');
  }
}
