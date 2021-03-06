import { Component } from '@angular/core';

@Component({
  selector: 'app-caixa-de-texto',
  templateUrl: './caixa-de-texto.component.html',
  styleUrls: ['./caixa-de-texto.component.css']
})
export class CaixaDeTextoComponent {
  onKeyPress(event) {
    console.log((event.target.value.length));
  }
}
