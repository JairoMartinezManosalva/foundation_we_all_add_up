import { Component, TemplateRef } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {

  constructor(
    private modalService: ModalService,
    ) {}

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate,
        {
          size: 'lg',
          title: 'Procesos de desarrollo turistico',
          content: ``,
          boton: false
      })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }

}
