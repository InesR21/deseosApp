import { ListaItem } from './lista-item.model';
import { ThrowStmt } from '@angular/compiler';

export class Lista {


    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor( titulo: string ) {

        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}
