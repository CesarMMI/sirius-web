import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpresaFormComponent } from "src/app/pages/home/pages/empresa/pages/empresa-form/empresa-form.component";
import { EmpresaTableComponent } from "src/app/pages/home/pages/empresa/pages/empresa-table/empresa-table.component";

const routes: Routes = [
  { path: "", component: EmpresaTableComponent },
  { path: "add", component: EmpresaFormComponent },
  { path: "edit/:id", component: EmpresaFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaRoutingModule {}
