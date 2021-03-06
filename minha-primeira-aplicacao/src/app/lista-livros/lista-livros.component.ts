import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public livros = [
    'Como morrem os pobres e outros ensaios',
    'A revolução dos bichos',
    '1988'
 ];

}
