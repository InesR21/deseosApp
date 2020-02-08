import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'fitroComple',
  pure: false,
})
export class FitroComplePipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true ): Lista[] {

    return listas.filter( lista => lista.terminada === completada );
  }

}
