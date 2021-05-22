import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-stripes',
  templateUrl: './nav-stripes.component.html',
  styleUrls: ['./nav-stripes.component.scss']
})
export class NavStripesComponent implements OnInit {

  open:boolean = false;

  classOpen:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  openClose()
  {
    this.open = !this.open;
    this.classOpen = this.open? 'turned': '';
  }
   
}
