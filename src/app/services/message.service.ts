import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageResponse } from '../types/message-response.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private endPointUrl =
    'https://jdzrrnv67dcnspexppkqyugwli0iaykg.lambda-url.us-east-1.on.aws/';
  constructor(private http: HttpClient) {}

  sendData(message: string): Observable<MessageResponse> {
    const data = { message };

    return this.http.post<MessageResponse>(this.endPointUrl, data);
  }
}
