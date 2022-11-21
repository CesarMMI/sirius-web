import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotaFiscalFormComponent } from "./pages/nota-fiscal-form/nota-fiscal-form.component";
import { NotaFiscalTableComponent } from "./pages/nota-fiscal-table/nota-fiscal-table.component";

const routes: Routes = [
  { path: "", component: NotaFiscalTableComponent },
  { path: "add", component: NotaFiscalFormComponent },
  {
    path: "edit/:id",
    component: NotaFiscalFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotaFiscalRoutingModule {}
