import { NgModule } from "@angular/core";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { DynamicPipe } from "src/app/shared/pipes/dynamic.pipe";
import { CepPipe } from './cep.pipe';

@NgModule({
  declarations: [DynamicPipe, CpfCnpjPipe, CepPipe],
  exports: [DynamicPipe, CpfCnpjPipe],
})
export class PipesModule {}
