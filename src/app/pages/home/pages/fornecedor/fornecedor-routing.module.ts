import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FornecedorFormComponent } from "./pages/fornecedor-form/fornecedor-form.component";
import { FornecedorTableComponent } from "./pages/fornecedor-table/fornecedor-table.component";

const routes: Routes = [
  { path: "", component: FornecedorTableComponent },
  { path: "add", component: FornecedorFormComponent },
  {
    path: "edit/:id",
    component: FornecedorFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FornecedorRoutingModule {}
