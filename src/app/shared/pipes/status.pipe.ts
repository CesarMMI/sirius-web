import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    switch(value.toLocaleUpperCase()){
      case 'A':
        return 'Ativo';
      case 'I':
        return 'Inativo';
      case 'P':
        return 'Pendente';
      case 'R':
        return 'Realizado';
      case 'C':
        return 'Confirmado';
      default:
        return value;
    }
  }

}
