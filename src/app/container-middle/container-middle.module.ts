import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerMiddleComponent } from './container-middle.component';
import { MatRadioModule} from '@angular/material/radio'
import { BotonWhatsappModule } from '../boton-whatsapp/boton-whatsapp.module';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    ContainerMiddleComponent
  ],
  exports: [
    ContainerMiddleComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    BotonWhatsappModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class ContainerMiddleModule { }
