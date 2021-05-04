import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})

export class DataService implements InMemoryDbService {
    constructor(){}

    createDb(){

        return {
            produtos: [

                {
                    id: 1,
                    nome: 'Xbox One',
                    descricao: 'Console Xbox Series S, 512 GB, com 1 Controle, RSR-00006 - Branco',
                    preco: 'R$ 2.999,00'
                },

                {
                    id: 2,
                    nome: 'PlayStation 4',
                    descricao: 'PlayStation 4 Mega Pack V15 1TB 1 Controle Preto - Sony com 3 Jogos PS Plus 3 Meses',
                    preco: 'R$ 2.603,07'

                },

                {
                    id: 3,
                    nome: 'Nintendo Switch',
                    descricao: 'Console Nintendo Switch - Cinza (Nacional)',
                    preco: 'R$2.429,99'
                }
            ]
        }
    }

}