import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() size? = 'md';
  @Input() title? = 'Modal title';
  @Input() content? = 'Modal content';
  @Input() boton:boolean = false;


  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  close(): void {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  submit(): void {
    this.elementRef.nativeElement.remove();
    this.submitEvent.emit();
  }
}
