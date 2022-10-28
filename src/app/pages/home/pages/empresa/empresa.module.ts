import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { EmpresaRoutingModule } from "./empresa-routing.module";
import { EmpresaFormComponent } from "./pages/empresa-form/empresa-form.component";
import { EmpresaTableComponent } from "./pages/empresa-table/empresa-table.component";

@NgModule({
  declarations: [EmpresaFormComponent, EmpresaTableComponent],
  imports: [CommonModule, EmpresaRoutingModule, CustomTableModule],
})
export class EmpresaModule {}
