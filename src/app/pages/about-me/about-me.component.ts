import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  programigSkills:{
        sprak:string,
        ramverk:string[]
  }[] = 
  [
    {
      sprak: 'Java',
      ramverk: ['Springboot', 'Hibernate/JPA', 'Thymeleaf', 'Java EE', 'JavaFX', 'Selenium']
      
    }
  ]

  workExperience:{heading:string,
                  type:string,
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
                    }
                  ]

}
