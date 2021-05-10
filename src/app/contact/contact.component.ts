import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendTo(site: string) {
    window.open(site)
  }

  whatsappCliente(numero: string) {
    window.open(`https://api.whatsapp.com/send?phone=${numero}`)
  }

}
