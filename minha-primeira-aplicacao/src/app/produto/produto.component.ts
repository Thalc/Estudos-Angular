import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public produto = {
    tipo: 'filme',
    titulo: 'Psicopata Americano',
    ano: '2000'
  };

  public setProduto(produto){
    this.produto = produto;
  }

}
