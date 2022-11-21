import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VendedorFormComponent } from "./pages/vendedor-form/vendedor-form.component";
import { VendedorTableComponent } from "./pages/vendedor-table/vendedor-table.component";

const routes: Routes = [
  { path: "", component: VendedorTableComponent },
  { path: "add", component: VendedorFormComponent },
  {
    path: "edit/:id",
    component: VendedorFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorRoutingModule {}
