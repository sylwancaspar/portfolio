import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-navigation',
  templateUrl: './cover-navigation.component.html',
  styleUrls: ['./cover-navigation.component.scss']
})
export class CoverNavigationComponent implements OnInit {

  open:boolean = false;
  timeoutOpen:boolean = false;
  openClass = '';

  constructor() { }

  ngOnInit(): void {
  }

  openClose(event)
  {
    this.open = event;
    if(this.open)
    {
      this.timeoutOpen = this.open;
      this.changeBodyClass()
      setTimeout(()=>this.openClass = "show", 500)
    }
    else
    {
      this.openClass = "";
      setTimeout(()=>{
        this.timeoutOpen = this.open
        this.changeBodyClass()
      }, 500)
      
    }
  }

  changeBodyClass() 
  {
    const bodyElement = document.body;

    if(this.open)
    {
      bodyElement.classList.add("open");
    }
    else
    {
      bodyElement.classList.remove("open");
    }
  }

}
