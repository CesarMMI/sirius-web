import { NgModule } from "@angular/core";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { DynamicPipe } from "src/app/shared/pipes/dynamic.pipe";
import { CepPipe } from './cep.pipe';
import { StatusPipe } from './status.pipe';

@NgModule({
  declarations: [DynamicPipe, CpfCnpjPipe, CepPipe, StatusPipe],
  exports: [DynamicPipe, CpfCnpjPipe, StatusPipe],
})
export class PipesModule {}
