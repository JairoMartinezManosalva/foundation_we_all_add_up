import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsComponent } from './donations.component';
import { BotonWhatsappModule } from '../boton-whatsapp/boton-whatsapp.module';



@NgModule({
  declarations: [
    DonationsComponent
  ],
  exports: [
    DonationsComponent
  ],
  imports: [
    CommonModule,
    BotonWhatsappModule
  ]
})
export class DonationsModule { }
