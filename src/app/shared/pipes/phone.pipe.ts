import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phone",
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    switch (value.length) {
      case 11:
        return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
          7,
          11
        )}`;
        break;
      case 10:
        return `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
          6,
          10
        )}`;
        break;
      default:
        return value;
        break;
    }
  }
}
