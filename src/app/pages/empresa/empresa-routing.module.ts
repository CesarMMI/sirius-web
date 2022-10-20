import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpresaFormComponent } from "src/app/pages/empresa/components/empresa-form/empresa-form.component";
import { EmpresasTableComponent } from "src/app/pages/empresa/components/empresas-table/empresas-table.component";

const routes: Routes = [
  { path: "", component: EmpresasTableComponent },
  { path: "add", component: EmpresaFormComponent },
  { path: "edit/:id", component: EmpresaFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaRoutingModule {}
