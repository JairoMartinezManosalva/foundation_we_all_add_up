import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
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
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class DonationsModule { }
