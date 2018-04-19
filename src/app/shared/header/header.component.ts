import { Component, OnInit } from '@angular/core';
// import { MatToolbarModule } from '@angular/material';
@Component({
  selector: 'app-header',
  template: ` 
<mat-toolbar color="primary">
  <span>Katowice na mapie primary</span>
</mat-toolbar>
<mat-toolbar class="alternate-theme" color="accent" fxFlex>
  <button mat-raised-button color="primary">
    Primary primary
  </button>
  <button mat-raised-button color="accent">
    Primary accent
  </button>
  <button mat-raised-button color="warn">
    Primary warn
  </button>
</mat-toolbar>
<!--
    <mat-card>
    <mat-card-actions>
  Main Theme:
  <button mat-raised-button color="primary">
    Primary
  </button>
  <button mat-raised-button color="accent">
    Accent
  </button>
  <button mat-raised-button color="warn">
    Warning
  </button></mat-card-actions>
</mat-card>

<mat-card class="alternate-theme">
  Alternate Theme: 
  <button mat-raised-button color="primary">
    Primary
  </button>
  <button mat-raised-button color="accent">
    Accent
  </button>
  <button mat-raised-button color="warn">
    Warning
  </button>
</mat-card> -->
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
