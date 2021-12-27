import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MessagingService } from 'src/app/service/messaging.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lang:string

  buttonText:string

  nameForm = new FormControl(''); 
  emailForm = new FormControl('');
  messageForm = new FormControl('')
  messageSent:boolean = false;

  

  constructor(private state:StateService,
              private emailService:MessagingService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.state.language.subscribe((lang)=>{
      this.lang = lang;
      this.changeLang(lang);
    })
  }

  changeLang(lang)
  {
    if(lang=='sv')
    {
      this.buttonText = 'SKICKA'
    }
    else
    {
      this.buttonText = 'SEND'
    }
  }

  sendEmail()
  {
   let email = {
      subject :"Homepage form by email " + this.emailForm.value,
      message : this.nameForm.value + " " + this.messageForm.value
    }
    console.log(email);
    this.emailService.sendEmail(email).subscribe(
      (response)=>
      {
        console.log("OK", response);
    },
    err => {
      if(err.status<300)
      {
        this.nameForm.setValue('')
        this.emailForm.setValue('')
        this.messageForm.setValue('');
        this.messageSent = true;
      } 
      console.log("OK", err.ok)
      console.log("err", err)
    
    });
   }

}
