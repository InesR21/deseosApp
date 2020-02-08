import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { JsonPipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  crearLista( titulo: string ) {
    const nuevaLista = new Lista(titulo);
    this.listas.push( nuevaLista );
    this.guardarstorage();
    return nuevaLista.id;
  }
  borrarLista( lista: Lista ) {
    this.listas = this.listas.filter( listaData => listaData.id !== lista.id );
    this.guardarstorage();
  }

  obtenerLista( id: string | number ) {
    id = Number(id);
    return this.listas.find( listaData => listaData.id === id );

  }

  guardarstorage() {
    localStorage.setItem('data', JSON.stringify( this.listas ) );
  }

  cargarStorage() {

    if ( localStorage.getItem('data') ) {
      this.listas = JSON.parse( localStorage.getItem('data') );
    } else {
      this.listas = [];
    }

  }

}
