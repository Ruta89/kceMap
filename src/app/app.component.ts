import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
    height: 100vh;
    width: 100vw;
  }
`
  ]
})
export class AppComponent {
  bounds: any;

  ngAfterViewInit() {
    setTimeout(() => {
      this.bounds = [[19.0013, 50.2644], [19.0413, 50.2944]];
    }, 2000);
  }
}
