import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ContainerTopModule } from '../container-top/container-top.module';
import { ContainerMiddleModule } from '../container-middle/container-middle.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ContainerMiddleModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
