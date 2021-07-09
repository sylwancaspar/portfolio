import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StateService } from 'src/app/service/state.service';

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

  lang:string;
  homeNav:string;
  aboutMeNav:string;
  projectsNav:string;
  contactNav:string;


  constructor(private router: Router, private state:StateService) { }

  ngOnInit(): void {

    this.state.language.subscribe((lang) => {
      this.lang = lang;
      this.changeLang(lang);
    })
  
    this.router.events.subscribe((val) => {

      if(val instanceof NavigationEnd)
      {
        this.activeRoute = val.urlAfterRedirects;
      }
      
    });
  }

  changeLang(language:string)
  {
    if(language=='sv')
    {
      this.homeNav = 'Hem';
      this.aboutMeNav = 'Om mig';
      this.projectsNav = 'Projekt';
      this.contactNav = 'Kontakt';
    }
    else
    {
      this.homeNav = 'Home';
      this.aboutMeNav = 'About me';
      this.projectsNav = 'Projects';
      this.contactNav = 'Contact';

    }
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

  closeNavigation()
  {
    this.openClose(false)
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

  isHome(navUrl:string)
  {
    navUrl = navUrl.split('/').join('')
    if(navUrl.length < 2)
    {      
      return this.openClass +' current'
    }
    else if(this.activeRoute.includes(navUrl))
    {
      return this.openClass +' current'
    }
    else
    {
      return this.openClass;
    } 
  }

}
