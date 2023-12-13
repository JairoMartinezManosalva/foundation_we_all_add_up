import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { ContainerTopModule } from './container-top/container-top.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { ModalModule } from './modal/modal.module';
import { NewsModule } from './news/news.module';
import { BotonWhatsappModule } from './boton-whatsapp/boton-whatsapp.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContainerMiddleModule } from './container-middle/container-middle.module';
import { DonationsModule } from './donations/donations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    ContainerTopModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    AppRoutingModule,
    YouTubePlayerModule,
    ModalModule,
    NewsModule,
    BotonWhatsappModule,
    AboutUsModule,
    ContainerMiddleModule,
    DonationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
