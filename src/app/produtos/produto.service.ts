import { Injectable } from '@angular/core';
import { Produto } from './produto.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    private produtoUrl = 'api/produtos/';
    constructor(private http: HttpClient){}

    getProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.produtoUrl).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        );
    }

    criarProduto(produto: Produto): Observable<Produto> {
        produto.id = null;

        return this.http.post<Produto>(this.produtoUrl, produto).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        )
    }
    editarProduto(produto: Produto): Observable<any> {
        return this.http.put(this.produtoUrl + produto.id, produto);
    }

    deletarProduto(id: number): Observable<any> {
        return this.http.delete(this.produtoUrl + id);
    }
}