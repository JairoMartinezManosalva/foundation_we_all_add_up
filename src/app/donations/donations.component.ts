import { Component, ElementRef, TemplateRef } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent {
  //dataContact: FormGroup;
  public isDonation: boolean = false;
  public isDonationInKind: boolean = false;
  public isAlly: boolean = false;

  constructor(
    private el: ElementRef,
    private modalService: ModalService,
    ) {}

  onSubmitDonation() {
    this.isDonation = true;
    this.isDonationInKind = false;
    this.isAlly = false;
    this.scroll();
  }

  onSubmitDonationInKind() {
    this.isDonation = false;
    this.isDonationInKind = true;
    this.isAlly = false;
    this.scroll();
  }

  onSubmitAlly() {
    this.isDonation = false;
    this.isDonationInKind = false;
    this.isAlly = true;
    this.scroll();
  }

  scroll(){
    setTimeout(() => {
      const element = this.el.nativeElement.querySelector('#content');
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
      }
    }, 500);

  }

  openModalAlly(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate,
        {
          size: 'lg',
          title: 'Aliados',
          content: ``
      })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }

  sendform(modalTemplate: TemplateRef<any>){
    setTimeout(() => {
      this.modalService
      .open(modalTemplate,
        {
          size: 'lg',
          title: 'Gracias',
          content: `Te contactaremos lo mas pronto posible.`
      })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
    }, 2000);
  }

}
