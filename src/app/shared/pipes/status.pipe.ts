import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    switch(value.toLocaleUpperCase()){
      case 'A':
        return 'Ativo';
      default:
        return value;
    }
  }

}
