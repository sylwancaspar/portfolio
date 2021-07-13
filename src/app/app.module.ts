import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CoverNavigationComponent } from './navigation/cover-navigation/cover-navigation.component';
import { NavStripesComponent } from './navigation/nav-stripes/nav-stripes.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OfferComponent } from './pages/offer/offer.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { AboutMePdfComponent } from './pages/about-me-pdf/about-me-pdf.component';
import { ChangeLanguageComponent } from './navigation/change-language/change-language.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverNavigationComponent,
    NavStripesComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    OfferComponent,
    ProjectItemComponent,
    AboutMePdfComponent,
    ChangeLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
