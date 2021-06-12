import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _language:Observable<string> = new BehaviorSubject<string>('sv');

  constructor() { }
}
