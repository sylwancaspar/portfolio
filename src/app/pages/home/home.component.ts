import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lang:string;

  constructor(private state:StateService) { }

  ngOnInit(): void {
    this.state.language.subscribe((lang)=>{
      this.lang = lang;
    })
  }

}
