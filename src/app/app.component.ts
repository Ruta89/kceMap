import { Component } from '@angular/core';
import { Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
<div class="container">
<app-header></app-header>
<router-outlet></router-outlet>
<app-tab></app-tab>
<app-footer></app-footer>

</div>
`,
  styles: [
    `
    
    :host {
      display: flex;
    }

    .container { 
        height: 100vh;
        width: 100vw;
      }
      `
  ]
})
export class AppComponent {}
