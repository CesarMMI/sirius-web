import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "tipoCliente",
})
export class TipoClientePipe implements PipeTransform {
    transform(value: string): string {
        switch (value.toLocaleUpperCase()) {
            case "F":
                return "Pessoa Física";
            case "J":
                return "Pessoa Jurídica";

            default:
                return value;
        }
    }
}
