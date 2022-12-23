import { NgModule } from "@angular/core";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { DynamicPipe } from "src/app/shared/pipes/dynamic.pipe";
import { CepPipe } from "./cep.pipe";
import { StatusPipe } from "./status.pipe";
import { PhonePipe } from "./phone.pipe";
import { TipoClientePipe } from './tipo-cliente.pipe';

@NgModule({
    declarations: [DynamicPipe, CpfCnpjPipe, CepPipe, StatusPipe, PhonePipe, TipoClientePipe],
    exports: [DynamicPipe, CpfCnpjPipe, StatusPipe, PhonePipe, TipoClientePipe],
    providers: [CpfCnpjPipe, CepPipe, StatusPipe, PhonePipe, TipoClientePipe]
})
export class PipesModule {}
