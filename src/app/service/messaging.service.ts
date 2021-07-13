import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private http:HttpClient) { }

  sendEmail(email)
  {
    return this.http.post("https://email-homepage-service.herokuapp.com/api/v1/mail/send", email);
  }
}
