import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent {
  @Input() phoneNumber: string = '923455067967';

  get whatsappLink(): string {
    return `https://wa.me/${this.phoneNumber}`;
  }
}