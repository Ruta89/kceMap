import { Component } from '@angular/core';
import { Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  
`
})
export class AppComponent {}
