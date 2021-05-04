import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [ProdutoListaComponent]
})
export class ProdutosModule { }
