import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotaFiscalPagamentosFormComponent } from "./pages/nota-fiscal-pagamentos-form/nota-fiscal-pagamentos-form.component";
import { NotaFiscalPagamentosTableComponent } from "./pages/nota-fiscal-pagamentos-table/nota-fiscal-pagamentos-table.component";

const routes: Routes = [
    { path: "", component: NotaFiscalPagamentosTableComponent },
    { path: "add", component: NotaFiscalPagamentosFormComponent },
    { path: "edit/:id", component: NotaFiscalPagamentosFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotaFiscalPagamentosRoutingModule {}
