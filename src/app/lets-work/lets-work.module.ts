import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetsWorkComponent } from './lets-work.component';
import { BotonWhatsappModule } from '../boton-whatsapp/boton-whatsapp.module';



@NgModule({
  declarations: [
    LetsWorkComponent
  ],
  exports: [
    LetsWorkComponent
  ],
  imports: [
    CommonModule,
    BotonWhatsappModule
  ],
})
export class LetsWorkModule { }
