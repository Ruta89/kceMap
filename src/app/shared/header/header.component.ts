import { Component, OnInit } from '@angular/core';
// import { MatToolbarModule } from '@angular/material';
@Component({
  selector: 'app-header',
  template: ` 
    <mat-toolbar color="primary" >
      <span>Katowice na mapie</span>
    </mat-toolbar>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
