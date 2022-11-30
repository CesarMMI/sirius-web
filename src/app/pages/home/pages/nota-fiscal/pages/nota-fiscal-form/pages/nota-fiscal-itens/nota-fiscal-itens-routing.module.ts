import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotaFiscalItensFormComponent } from "./pages/nota-fiscal-itens-form/nota-fiscal-itens-form.component";
import { NotaFiscalItensTableComponent } from "./pages/nota-fiscal-itens-table/nota-fiscal-itens-table.component";

const routes: Routes = [
    { path: "", component: NotaFiscalItensTableComponent },
    { path: "add", component: NotaFiscalItensFormComponent },
    { path: "edit/:id", component: NotaFiscalItensFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotaFiscalItensRoutingModule {}
