import { Component, TemplateRef } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(private modalService: ModalService) {}

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate,
        {
          size: 'lg',
          title: 'QUIENES SOMOS',
          content: 'Somos una organización sin animo de lucro tiene como objetivo acompañar y asesorar jóvenes de Colombia para fomentar el desarrollo humano, social y cultural involucrando diferentes tipos de actividades y disciplinas.'
      })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
  openModalVision(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate,
        {
          size: 'lg',
          title: 'Visión',
          content: 'Ser una fundación líder en procesos de formacion y desarrollo de talento humano para el año 2028 y reconocida a nivel nacional.'
        })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
  openModalMision(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate,
        {
          size: 'lg',
          title: 'Misión',
          content: 'Apoyar procesos de formación y desarrollo de talento humano en las comunidades de manera inclusiva y con responsabilidad social.'
        })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
}
