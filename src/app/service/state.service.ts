import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _language:BehaviorSubject<Language> = new BehaviorSubject<Language>(Language.SWEDISH);

  constructor() { }

  get language()
  {
    return this._language;
  }

  changeLanguage(lang:Language)
  {
    this._language.next(lang)
  }

}
