import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverNavigationComponent } from './navigation/cover-navigation/cover-navigation.component';
import { NavStripesComponent } from './navigation/nav-stripes/nav-stripes.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverNavigationComponent,
    NavStripesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
