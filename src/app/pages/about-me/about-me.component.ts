import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Merits } from 'src/app/models/merits';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  merits:Merits = new Merits();

  lang;
  aboutMeText;
  workExperience;
  programigSkills;
  downloadCv:string;
  spokenLang

  constructor( private router:Router, private state:StateService ) { }

  ngOnInit(): void {

    this.state.language.subscribe((lang) =>{
      this.changeLang(lang); 
    })
  }

  changeLang(lang:string)
  {
    this.lang = lang
    if(lang == 'sv')
    {
      this.workExperience = this.merits.swedishCV();
      this.programigSkills = this.merits.svProgramingTools();
      this.aboutMeText = this.merits.aboutMeSv();
      this.downloadCv = 'Ladda ner cv';
      this.spokenLang = this.merits.getSpokenLanguageSv()     
    }
    else
    {
      this.workExperience = this.merits.englishCV();
      this.programigSkills = this.merits.engProgramingTools();
      this.aboutMeText = this.merits.aboutMeEng();
      this.downloadCv = 'Download cv';
      this.spokenLang = this.merits.getSpokenLanguageEng()
    }
  }


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
    
  }

}
