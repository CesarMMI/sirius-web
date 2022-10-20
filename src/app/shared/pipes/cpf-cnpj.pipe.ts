import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cpfCnpj",
})
export class CpfCnpjPipe implements PipeTransform {
  transform(value: string): string {
    switch (value.length) {
      case 11:
        return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(
          6,
          9
        )}-${value.slice(9)}`;
        break;
      case 14:
        return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(
          5,
          8
        )}/${value.slice(8, 12)}-${value.slice(12)}`;
        break;
      default:
        return value;
        break;
    }
  }
}
