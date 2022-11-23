import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PagamentoFormComponent } from "./pages/pagamento-form/pagamento-form.component";
import { PagamentoTableComponent } from "./pages/pagamento-table/pagamento-table.component";

const routes: Routes = [
    { path: "", component: PagamentoTableComponent },
    { path: "add", component: PagamentoFormComponent },
    { path: "edit/:id", component: PagamentoFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagamentoRoutingModule {}
