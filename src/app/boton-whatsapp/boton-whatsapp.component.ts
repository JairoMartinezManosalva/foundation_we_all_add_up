import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-boton-whatsapp',
  templateUrl: './boton-whatsapp.component.html',
  styleUrls: ['./boton-whatsapp.component.css']
})
export class BotonWhatsappComponent {
  @HostListener('window:scroll', [])
   onWindowScroll() {
    if (
      document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 0
    ) {
      document.getElementById('appear')?.classList.add('active')
    }
    else(
      document.getElementById('appear')?.classList.remove('active')
    )
  }
  title = 'WhatsApp';
}
