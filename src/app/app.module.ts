import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatCardMdImage,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import { TabComponent } from './shared/tab/tab.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// import { RouterModule,   } from '@angular/material';
const appRoutes: Routes = [
  { path: 'head', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  {
    path: 'map',
    component: MapComponent,
    data: { title: 'Map List' }
  },
  { path: '**', component: MapComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    NgxMapboxGLModule.forRoot({
      accessToken:
        'pk.eyJ1IjoicnV0YTg5IiwiYSI6ImNqM2xwNGR4NDAwNTMycm83bnU3dWtsaGsifQ.wBDLAm3MTTlyVKb4f3X60Q'
    }),
    RouterModule.forRoot(
      appRoutes
      // ,
      // { enableTracing: true }
    ),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
    // MaterialModule
    // other imports here
  ],
  exports: [MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
