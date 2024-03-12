import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { InterrogationIconComponent } from '../../icons/interrogation-icon/interrogation-icon.component';
import { SearchIconComponent } from '../../icons/search-icon/search-icon.component';
import { KeyIconComponent } from '../../icons/key-icon/key-icon.component';

@Component({
  selector: 'chat-suggestions',
  standalone: true,
  templateUrl: './chat-suggestions.component.html',
  styleUrl: './chat-suggestions.component.scss',
  imports: [
    CommonModule,
    InterrogationIconComponent,
    SearchIconComponent,
    KeyIconComponent,
  ],
})
export class ChatSuggestionsComponent {
  @Output() questionSelected: EventEmitter<string> = new EventEmitter<string>();

  suggestionTopics = [
    {
      title: 'Dúvidas',
      icon: 'interrogation-icon',
      questions: [
        'Onde está localizada a Catedral Metropolitana Nossa Senhora Aparecida?',
        'Quais são os horários de missa?',
      ],
    },
    {
      title: 'Curiosidades',
      icon: 'key-icon',
      questions: [
        'Existem atrações turísticas nas proximidades que você recomendaria?',
        'Pode listar alguns dos eventos religiosos que ocorrem regularmente na catedral?',
        'Pode explicar quais materiais foram usados na construção da catedral?',
      ],
    },
    {
      title: 'História',
      icon: 'search-icon',
      questions: [
        'Quem foi o arquiteto responsável pelo projeto da Catedral de Brasília?',
        'Quais desafios foram enfrentados durante a construção da catedral?',
        'Houve eventos religiosos ou históricos notáveis desde a inauguração?',
      ],
    },
  ];

  selectQuestion(question: string) {
    this.questionSelected.emit(question);
  }
}
