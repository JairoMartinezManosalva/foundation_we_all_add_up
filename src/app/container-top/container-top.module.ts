import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerTopComponent } from './container-top.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from '../app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    ContainerTopComponent
  ],
  exports: [
    ContainerTopComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatExpansionModule,
    AppRoutingModule,
    MatSlideToggleModule
  ]
})
export class ContainerTopModule { }
