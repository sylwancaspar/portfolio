import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-stripes',
  templateUrl: './nav-stripes.component.html',
  styleUrls: ['./nav-stripes.component.scss']
})
export class NavStripesComponent implements OnInit {

  @Input()
  open:boolean;

  @Output()
  openEvent:EventEmitter<boolean> = new EventEmitter();
  

  classOpen:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  openClose()
  {
    this.open = !this.open;
    this.classOpen = this.open? 'turned': '';
    this.openEvent.emit(this.open)
  }
   
}
