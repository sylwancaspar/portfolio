import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {


  constructor( private router:Router ) { }

  ngOnInit(): void {
  }

  programigSkills:{
        sprak:string,
        ramverk:string[]
  }[] = 
  [
    {
      sprak: 'Java',
      ramverk: ['Springboot', 'Hibernate/JPA', 'Thymeleaf', 'Java EE', 'JavaFX', 'Selenium (e2e)', 'Junit 5 (Unit testing)', "Mockito  (Unit testing)"]      
    },
    {
     sprak: 'Python',
     ramverk:['Tkinter','Numpy','Panda', 'Anaconda']
    },
    {
      sprak:'R',
      ramverk:['R-studio']
    },
    {
      sprak:'TypeScript',
      ramverk:['Leaflet', 'Chart.js']
    },
    {
      sprak:'Frontend bas',
      ramverk:['HTML5', 'CSS', 'SCSS/SASS', 'AJAX', 'Web Content Accessibility Guidelines (WCAG)', 'Bootstrap']
    }
    ,
    {
      sprak:'Frontend ramverk',
      ramverk:['Angular 2+', 'Rxjs', 'Protractor (e2e)', 'Jasmine/Karma (Unit testing)', 'Vue', 'VueX']

    },
    {
      sprak:'Git',
      ramverk:['']
    }
  ]

  workExperience:{heading:string,
                  type:string,
                  place?:string,
                  from:Date,
                  to:Date,
                  description:string}[]=
                   [
                     {
                       heading:"Arbetsförmedlingen IT – Solna",
                       type:'work',
                       from: new Date("2020-01-01"),
                       to: null, 
                       description: "Utvecklare främst frontend men även backend"
                     }
                     ,
                     {
                      heading:"Arbetsförmedlingen – Järfälla",
                      type:'work',
                      from: new Date("2017-01-01"),
                      to: new Date('2020-01-01'), 
                      description: "Handleda och vägleda arbetssökande i deras sökande efter ett nytt jobb."
                    },
                    {
                      heading:"Kista Bibliotek",
                      type:'work',
                      from: new Date('2015-01-01'),
                      to: new Date('2016-01-01'),
                      description:"Planera och utveckla arbetet med digitala resurser och kanaler på biblioteket. Fungera som digital pedagog samt agera innehållsproducent i digitala kanaler. Ansvara för vissa statistikuppgifter."
                    },
                    {
                      heading:"Kulturskolan",
                      type:'work',
                      from: new Date('2013-01-01'),
                      to: new Date('2015-01-01'),
                      description:"Driva cirkusenheten på Kulturskolan Stockholm. Detta inkluderar planerandet, genomförandet och utvärderandet utav Cirkusverksamheten. Leda det pedagogiska arbetet med medarbetarna."
                    },
                    {
                      heading:"The Palestinian Circus School",
                      type:'work',
                      from: new Date('2012-01-01'),
                      to: new Date('2013-01-01'),
                      description:"Pedagogisk samordnare"
                    },
                    {
                      heading:"Kulturskolan",
                      type:'work',
                      from: new Date('2008-01-01'),
                      to: new Date('2012-01-01'),
                      description:"Driva cirkusenheten på Kulturskolan Stockholm. Detta inkluderar planerandet, genomförandet och utvärderandet utav Cirkusverksamheten. Leda det pedagogiska arbetet med medarbetarna."
                    }
                    ,
                    {
                      heading:"The BOX entertainment",
                      type:'work',
                      from: new Date('1999-01-01'),
                      to: new Date('2008-01-01'),
                      description:"Egen företagare och frilansartist Producera, budgetera och marknadsföra konstnärliga event. Medverkade i produktioner som Melodiefestivalen, Super cirkör och flera andra."
                    },
                    {
                      heading: "Yrkeshögskoleexamen Javautvecklare",
                      place:"IT-högskolan",
                      type: 'education',
                      from: new Date('2019-01-01'),
                      to: new Date('2021-01-01'),
                      description: "Fullstack, både back-end och front-end."
                    },
                    {
                      heading: "Kandidatexamen i Nationalekonomi",
                      place: "Stockholms Universitet",
                      type: 'education',
                      from: new Date('2019-01-01'),
                      to: new Date('2021-01-01'),
                      description: "Inkluderande 60 hp i matematik och statistik. Dessa 60hp inkluderade flera kurser i linjäralgebra, envariabelsanalys, flervariabelsanalys, regressionsanalys, Multivariata metoder, Avancerad programmering i R."
                    },
                    {
                      heading: "Konstnärlig kandidatexamen i scenkonst",
                      place:"BELGIEN",
                      type: 'education',
                      from: new Date('2019-01-01'),
                      to: new Date('2021-01-01'),
                      description: "L’Ecole Supérieure des Arts du Cirque – ESAC"
                    }
                  ]

  giveWork()
  {
    return this.workExperience
      .filter(work => work.type == 'work')
  }

  giveEducation()
  {
    return this.workExperience
      .filter(work => work.type == 'education')
  }

  htmlToPdf() 
  {
    let tab =  window.open('about-pdf', "_blank");
     setTimeout(()=> tab.close(), 1000);
  }

}
