import { Component, OnInit } from '@angular/core';
// import { MatTabsModule } from '@angular/material';

@Component({
  selector: 'app-tab',
  template: `
  <div class="flexDemoContainer">
  <div fxLayout="row"  fxFlex>
    <div fxFlex>
    <mat-tab-group>
    <mat-tab label="Tab 1">Tab 1</mat-tab>
    <mat-tab label="Tab 2">Tab 2</mat-tab>
    <mat-tab label="Tab 1">Tab 3</mat-tab>
    <mat-tab label="Tab 2">Tab 4</mat-tab>
    </mat-tab-group> 
    </div> 
  </div> 
  `,
  styleUrls: ['./tab.css']
})
export class TabComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
