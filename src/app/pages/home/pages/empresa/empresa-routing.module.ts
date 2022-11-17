import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpresaFormComponent } from "src/app/pages/home/pages/empresa/pages/empresa-form/empresa-form.component";
import { EmpresaTableComponent } from "src/app/pages/home/pages/empresa/pages/empresa-table/empresa-table.component";
import { TokenGuard } from "src/app/shared/guards/token.guard";

const routes: Routes = [
  { path: "", component: EmpresaTableComponent },
  { path: "add", component: EmpresaFormComponent },
  {
    path: "edit/:id",
    component: EmpresaFormComponent,
    canActivate: [TokenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaRoutingModule {}
