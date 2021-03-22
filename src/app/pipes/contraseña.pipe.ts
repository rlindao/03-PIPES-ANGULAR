import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContraseñaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false ): string {
    return ( mostrar ) ? '*'.repeat( value.length) : value ;
  }

}
