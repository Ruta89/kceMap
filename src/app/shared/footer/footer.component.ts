import { TabComponent } from './../tab/tab.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<app-tab></app-tab>
  <mat-toolbar color="accent">

  <footer> stopka</footer>
  </mat-toolbar> 
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
