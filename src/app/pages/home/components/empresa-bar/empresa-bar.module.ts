import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { SkeletonModule } from "primeng/skeleton";
import { EmpresaBarComponent } from "src/app/pages/home/components/empresa-bar/empresa-bar.component";

@NgModule({
  declarations: [EmpresaBarComponent],
  imports: [CommonModule, SkeletonModule, ButtonModule],
  exports: [EmpresaBarComponent],
})
export class EmpresaBarModule {}
