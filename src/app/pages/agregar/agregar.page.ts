import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor( private deseosService: DeseosService,
               private route: ActivatedRoute ) {
    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.obtenerLista( listaId );
  }

  ngOnInit() {
  }

agregarItem() {
  if ( this.nombreItem.length === 0 ) {
    return;
  }
  const nuevoItem = new ListaItem ( this.nombreItem );
  this.lista.items.push( nuevoItem );
  this.nombreItem = '';
  this.deseosService.guardarstorage();
}

cambioCheck( item: ListaItem) {

  const pendientes = this.lista.items
                          .filter( itemdata => !itemdata.completado )
                          .length;
  // console.log({pendientes});
  if ( pendientes === 0 ) {
  this.lista.terminadaEn = new Date();
  this.lista.terminada = true;
} else {
  this.lista.terminadaEn = null;
  this.lista.terminada = false;
}
  this.deseosService.guardarstorage();
}
borrar( i: number ) {
  this.lista.items.slice( i, 1);
  this.deseosService.guardarstorage();
}

}
