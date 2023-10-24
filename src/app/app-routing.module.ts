import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProgramsComponent } from './programs/programs.component';
import { NewsComponent } from './news/news.component';
import { LetsWorkComponent } from './lets-work/lets-work.component';
import { DonationsComponent } from './donations/donations.component';
import { HomeComponent } from './home/home.component';
import { ContainerMiddleComponent } from './container-middle/container-middle.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ContainerMiddleComponent },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'programas', component: ProgramsComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'trabaja-con-nosotros', component: LetsWorkComponent },
  { path: 'quiero-donar', component: DonationsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }