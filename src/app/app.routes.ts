import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChatTextComponent } from './pages/chat-text/chat-text.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'chat',
    component: ChatTextComponent,
  },
];
