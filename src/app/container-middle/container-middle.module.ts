import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerMiddleComponent } from './container-middle.component';
import { MatRadioModule} from '@angular/material/radio'
import { BotonWhatsappModule } from '../boton-whatsapp/boton-whatsapp.module';


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
  ]
})
export class ContainerMiddleModule { }
