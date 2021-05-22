import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-navigation',
  templateUrl: './cover-navigation.component.html',
  styleUrls: ['./cover-navigation.component.scss']
})
export class CoverNavigationComponent implements OnInit {

  open:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openClose(event)
  {
    this.open = event;
  }

}
