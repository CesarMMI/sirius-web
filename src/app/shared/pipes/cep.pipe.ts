import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cep",
})
export class CepPipe implements PipeTransform {
  transform(value: string): string {
    value = value.replace("-", "");
    if (value.length === 8) return `${value.slice(0, 5)}-${value.slice(5)}`;

    return value;
  }
}
