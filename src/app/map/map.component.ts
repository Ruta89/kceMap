import { HeaderComponent } from './../shared/header/header.component';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-map',
  template: `

  <mgl-map
  [style]="'mapbox://styles/mapbox/streets-v10'"
  [zoom]="[9]"
  [center]="[19.04, 50]"
  [fitBounds]="bounds"
>
</mgl-map>
  `,
  styles: [
    `
  :host {
    display: flex;
  }
  mgl-map {
    height: 50vh;
    width: 100vw;
  }
`
  ]
})
export class MapComponent implements OnInit {
  bounds: any;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.bounds = [[19.0013, 50.2644], [19.0413, 50.2944]];
    }, 2000);
  }
}
