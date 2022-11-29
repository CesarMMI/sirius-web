import { NgModule } from "@angular/core";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { DynamicPipe } from "src/app/shared/pipes/dynamic.pipe";
import { CepPipe } from "./cep.pipe";
import { StatusPipe } from "./status.pipe";
import { PhonePipe } from "./phone.pipe";

@NgModule({
    declarations: [DynamicPipe, CpfCnpjPipe, CepPipe, StatusPipe, PhonePipe],
    exports: [DynamicPipe, CpfCnpjPipe, StatusPipe, PhonePipe],
    providers: [CpfCnpjPipe, CepPipe, StatusPipe, PhonePipe]
})
export class PipesModule {}
