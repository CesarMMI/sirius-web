import { NgModule } from "@angular/core";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { DynamicPipe } from "src/app/shared/pipes/dynamic.pipe";
import { CepPipe } from "./cep.pipe";
import { StatusPipe } from "./status.pipe";
import { PhonePipe } from "./phone.pipe";
import { TipoClientePipe } from './tipo-cliente.pipe';
import { PaymentPipe } from './payment.pipe';

@NgModule({
    declarations: [DynamicPipe, CpfCnpjPipe, CepPipe, StatusPipe, PhonePipe, TipoClientePipe, PaymentPipe],
    exports: [DynamicPipe, CpfCnpjPipe, StatusPipe, PhonePipe, TipoClientePipe, PaymentPipe],
    providers: [CpfCnpjPipe, CepPipe, StatusPipe, PhonePipe, TipoClientePipe, PaymentPipe]
})
export class PipesModule {}
