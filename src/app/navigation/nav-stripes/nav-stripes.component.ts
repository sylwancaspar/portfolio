import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-stripes',
  templateUrl: './nav-stripes.component.html',
  styleUrls: ['./nav-stripes.component.scss']
})
export class NavStripesComponent implements OnInit, OnChanges {

  @Input()
  open:boolean;

  @Output()
  openEvent:EventEmitter<boolean> = new EventEmitter();
  

  classOpen:string = '';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.openCloseFromParent()
  }
  

  ngOnInit(): void {
  }

  openClose()
  {
    this.open = !this.open;
    this.classOpen = this.open? 'turned': '';
    this.openEvent.emit(this.open)
  }

  openCloseFromParent()
  {
    
    this.classOpen = this.open? 'turned': '';
    //this.openEvent.emit(this.open)
  }
   
}
