import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss']
})
export class ChangeLanguageComponent implements OnInit {

  lang:string;

  constructor(private state:StateService) { }

  ngOnInit(): void {
    this.state.language.subscribe((lang) => this.lang = lang);
  }

  changeLang(lang:string)
  {
    if(lang=='sv')
    {
      this.state.changeLanguage(Language.SWEDISH)
    }
    else
    {
      this.state.changeLanguage(Language.ENGLISH)
    }
  }
}
