import { Component, OnInit } from '@angular/core';
import { Produto } from "../produto.model";
import { ProdutoService } from "../produto.service";

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produto = {
    nome: '',
    id: null
  }

  edit = true;
  add = false;

  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos()
  }

  private getProdutos(){
    this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
  }

  addProduto(){
    const data = {
      nome: this.produto.nome,
      id: this.produto.id
    };
    this.produtoService.criarProduto(data).subscribe(response => {
      console.log(response)
      this.getProdutos();
    });
  }

  setProdutoEdit(produto: Produto){
    this.produto.nome = produto.nome;
    this.produto.id = produto.id;
    this.edit = false;
    this.add = true;
  }

  resetValores(){
    this.produto.nome = "";
    this.produto.id = null;
    this.edit = true;
    this.add = true;
    this.add = false;
  }

  removerProduto(produto: Produto){
    const id = produto.id;
    console.log(produto)
    this.produtoService.deletarProduto(id).subscribe(produto => console.log(produto));
    this.getProdutos()
  }

  updateProduto(){
    this.produtoService.editarProduto(this.produto).subscribe(response => console.log(response));
    this.getProdutos()
    this.resetValores()
  }
}
