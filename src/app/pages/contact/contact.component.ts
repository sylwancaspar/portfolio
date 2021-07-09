import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lang:string


  constructor(private state:StateService) { }

  ngOnInit(): void {

    this.state.language.subscribe((lang)=>{
      this.lang = lang;
    })
  }

}
