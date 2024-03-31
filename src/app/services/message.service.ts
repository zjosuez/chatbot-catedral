import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageResponse } from '../types/message-response.type';
import { Observable } from 'rxjs';
import { env } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private endPointUrl = env.apiUrl;
  constructor(private http: HttpClient) {}

  sendData(message: string): Observable<MessageResponse> {
    const data = { message };

    return this.http.post<MessageResponse>(this.endPointUrl, data);
  }
}
