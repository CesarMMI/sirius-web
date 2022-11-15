import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmpresaBarComponent } from "src/app/pages/home/components/empresa-bar/empresa-bar.component";
import { SkeletonModule } from "primeng/skeleton";
import { ButtonModule } from "primeng/button";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { PipesModule } from "src/app/shared/pipes/pipes.module";

@NgModule({
  declarations: [EmpresaBarComponent],
  imports: [CommonModule, SkeletonModule, ButtonModule, PipesModule],
  exports: [EmpresaBarComponent],
})
export class EmpresaBarModule {}
