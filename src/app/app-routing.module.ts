import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { OfferComponent } from './pages/offer/offer.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  
  {path:'home', component: HomeComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'about', component: AboutMeComponent},
  {path:'contact', component: ContactComponent},
  {path:'offer', component: OfferComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
