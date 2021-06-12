import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cover-navigation',
  templateUrl: './cover-navigation.component.html',
  styleUrls: ['./cover-navigation.component.scss']
})
export class CoverNavigationComponent implements OnInit {

  open:boolean = false;
  timeoutOpen:boolean = false;
  openClass = 'close';

  activeRoute:string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url)
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd)
      {
        this.activeRoute = val.url;
      }
      
    });
  }

  openClose(event)
  {
    this.open = event;
    
    if(this.open)
    {
      this.timeoutOpen = this.open;
      this.changeBodyClass()
      setTimeout(()=>{
        this.openClass == "show"? this.openClass = "close": this.openClass = "show"
      }, 500)
      
    }
    else
    {

      this.openClass != "close"? this.openClass = "close": this.openClass = "show"
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
