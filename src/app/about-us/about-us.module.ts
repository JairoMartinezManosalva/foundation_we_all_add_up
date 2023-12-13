import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { BotonWhatsappModule } from '../boton-whatsapp/boton-whatsapp.module';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  exports: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    BotonWhatsappModule
  ]
})
export class AboutUsModule { }
