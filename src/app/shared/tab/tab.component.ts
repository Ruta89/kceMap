import { Component, OnInit } from '@angular/core';
// import { MatTabsModule } from '@angular/material';

@Component({
  selector: 'app-tab',
  template: `
<div>  <mat-tab-group>
<mat-tab label="Tab 1">Content 1</mat-tab>
<mat-tab label="Tab 2">Content 2</mat-tab>
</mat-tab-group></div>
  `
})
export class TabComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
