import { AfterViewInit, Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { Merits } from 'src/app/models/merits';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-about-me-pdf',
  templateUrl: './about-me-pdf.component.html',
  styleUrls: ['./about-me-pdf.component.scss']
})
export class AboutMePdfComponent implements OnInit, AfterViewInit {

  merits:Merits = new Merits();

  workExperience;
  programigSkills;
  spokenLanguages;

  constructor(private router:Router, private state:StateService) { }
  ngAfterViewInit(): void {
      //  this.htmlToPdf()
  }

  ngOnInit(): void {
    this.workExperience = this.merits.englishCV();
    this.programigSkills = this.merits.engProgramingTools();
    this.spokenLanguages = this.merits.getSpokenLanguageEng();
    
  }

  changeLang(lang:string)
  {

  }

//   workExperience:{heading:string,
//     type:string,
//     place?:string,
//     from:Date,
//     to:Date,
//     description:string}[]=
//      [
//        {
//          heading:"Arbetsförmedlingen IT – Solna",
//          type:'work',
//          from: new Date("2020-01-01"),
//          to: null, 
//          description: "Utvecklare främst frontend men även backend"
//        }
//        ,
//        {
//         heading:"Arbetsförmedlingen – Järfälla",
//         type:'work',
//         from: new Date("2017-01-01"),
//         to: new Date('2020-01-01'), 
//         description: "Handleda och vägleda arbetssökande i deras sökande efter ett nytt jobb."
//       },
//       {
//         heading:"Kista Bibliotek",
//         type:'work',
//         from: new Date('2015-01-01'),
//         to: new Date('2016-01-01'),
//         description:"Planera och utveckla arbetet med digitala resurser och kanaler på biblioteket. Fungera som digital pedagog samt agera innehållsproducent i digitala kanaler. Ansvara för vissa statistikuppgifter."
//       },
//       {
//         heading:"Kulturskolan",
//         type:'work',
//         from: new Date('2013-01-01'),
//         to: new Date('2015-01-01'),
//         description:"Driva cirkusenheten på Kulturskolan Stockholm. Detta inkluderar planerandet, genomförandet och utvärderandet utav Cirkusverksamheten. Leda det pedagogiska arbetet med medarbetarna."
//       },
//       {
//         heading:"The Palestinian Circus School",
//         type:'work',
//         from: new Date('2012-01-01'),
//         to: new Date('2013-01-01'),
//         description:"Pedagogisk samordnare"
//       },
//       {
//         heading:"Kulturskolan",
//         type:'work',
//         from: new Date('2008-01-01'),
//         to: new Date('2012-01-01'),
//         description:"Driva cirkusenheten på Kulturskolan Stockholm. Detta inkluderar planerandet, genomförandet och utvärderandet utav Cirkusverksamheten. Leda det pedagogiska arbetet med medarbetarna."
//       }
//       ,
//       {
//         heading:"The BOX entertainment",
//         type:'work',
//         from: new Date('1999-01-01'),
//         to: new Date('2008-01-01'),
//         description:"Egen företagare och frilansartist Producera, budgetera och marknadsföra konstnärliga event. Medverkade i produktioner som Melodiefestivalen, Super cirkör och flera andra."
//       },
//       {
//         heading: "Yrkeshögskoleexamen Javautvecklare",
//         place:"IT-högskolan",
//         type: 'education',
//         from: new Date('2019-01-01'),
//         to: new Date('2021-01-01'),
//         description: "Fullstack, både back-end och front-end."
//       },
//       {
//         heading: "Kandidatexamen i Nationalekonomi",
//         place: "Stockholms Universitet",
//         type: 'education',
//         from: new Date('2019-01-01'),
//         to: new Date('2021-01-01'),
//         description: "Inkluderande 60 hp i matematik och statistik. Dessa 60hp inkluderade flera kurser i linjäralgebra, envariabelsanalys, flervariabelsanalys, regressionsanalys, Multivariata metoder, Avancerad programmering i R."
//       },
//       {
//         heading: "Konstnärlig kandidatexamen i scenkonst",
//         place:"BELGIEN",
//         type: 'education',
//         from: new Date('2019-01-01'),
//         to: new Date('2021-01-01'),
//         description: "L’Ecole Supérieure des Arts du Cirque – ESAC"
//       }
//     ]

//     programigSkills:{
//       sprak:string,
//       ramverk:string[]
// }[] = 
// [
//   {
//     sprak: 'Java',
//     ramverk: ['Springboot', 'Hibernate/JPA', 'Thymeleaf', 'Java EE', 'JavaFX', 'Selenium (e2e)', 'Junit 5 (Unit testing)', "Mockito  (Unit testing)"]      
//   },
//   {
//    sprak: 'Python',
//    ramverk:['Tkinter','Numpy','Panda', 'Anaconda']
//   },
//   {
//     sprak:'R',
//     ramverk:['R-studio']
//   },
//   {
//     sprak:'TypeScript',
//     ramverk:['Leaflet', 'Chart.js']
//   },
//   {
//     sprak:'Frontend bas',
//     ramverk:['HTML5', 'CSS', 'SCSS/SASS', 'AJAX', 'Web Content Accessibility Guidelines (WCAG)', 'Bootstrap']
//   }
//   ,
//   {
//     sprak:'Frontend ramverk',
//     ramverk:['Angular 2+', 'Rxjs', 'Protractor (e2e)', 'Jasmine/Karma (Unit testing)', 'Vue', 'VueX']

//   },
//   {
//     sprak:'Git',
//     ramverk:['']
//   }
// ]


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
    let DATA = document.getElementById('about-pdf');
  
    html2canvas(DATA).then(canvas => {
    
      let fileWidth = 210;
      let pageHeight = 295;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      console.log(canvas.height)
      console.log(fileHeight)
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      // position = - 295 ;
      // console.log("POS", position);
      // PDF.addPage();
      // PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      PDF.save('caspar-sylwan-cv.pdf');
      //this.router.navigate(['/about'])
  }); 
  }


}
