import { TabComponent } from './../tab/tab.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` 
  <mat-toolbar color="accent">

  <footer> stopka</footer><small>
  ng build --prod --base-href "https://Ruta89.github.io/kceMap/" && ngh
 </small>
  </mat-toolbar> 
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
