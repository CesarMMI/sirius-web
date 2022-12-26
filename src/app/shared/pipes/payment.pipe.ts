import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "payment",
})
export class PaymentPipe implements PipeTransform {
    transform(value: string): string {
        switch (value.toLocaleUpperCase()) {
            case "01":
                return "Dinheiro";
            case "02":
                return "Cheque";
            case "03":
                return "Cartão de Crédito";
            case "04":
                return "Cartão de Débito";
            case "05":
                return "Crédito Loja";
            case "10":
                return "Vale Alimentação";
            case "11":
                return "Vale Refeição";
            case "12":
                return "Vale Presente";
            case "13":
                return "Vale Combustível";
            case "15":
                return "Boleto Bancário";
            case "16":
                return "Deposito Bancário";
            case "17":
                return "Pagamento Instantâneo (PIX)";
            case "18":
                return "Transferência Bancária, Carteira Digital";
            case "19":
                return "Programa de Fidelidade, CashBack, Crédito Virtual, etc.";
            case "90":
                return "Sem Pagamento";
            case "99":
                return "Outros";
            default:
                return value;
        }
    }
}
