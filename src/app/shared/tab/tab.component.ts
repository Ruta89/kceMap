import { Component, OnInit } from '@angular/core';
// import { MatTabsModule } from '@angular/material';

@Component({
  selector: 'app-tab',
  template: `
<div class="flexDemoContainer">
  <div fxLayout="column" color="primary">
    <mat-tab-group color="primary" >
      <mat-tab label="Tab 1"> 
      <ng-template mat-tab-label>
      <mat-icon>build</mat-icon>
    </ng-template>
    </mat-tab>
      <mat-tab label="Tab 2"> <ng-template mat-tab-label>
      <mat-icon>block</mat-icon>
    </ng-template></mat-tab>
      <mat-tab label="Tab 3"> <ng-template mat-tab-label>
      <mat-icon>loop</mat-icon>
    </ng-template></mat-tab>
      <mat-tab label="Tab 4"> <ng-template mat-tab-label>
      <mat-icon>work</mat-icon>
    </ng-template></mat-tab>
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
