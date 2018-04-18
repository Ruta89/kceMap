import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    NgxMapboxGLModule.forRoot({
      accessToken: 'pk.eyJ1IjoicnV0YTg5IiwiYSI6ImNqM2xwNGR4NDAwNTMycm83bnU3dWtsaGsifQ.wBDLAm3MTTlyVKb4f3X60Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
