import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PedidoVendaPagamentosFormComponent } from "./pages/pedido-venda-pagamentos-form/pedido-venda-pagamentos-form.component";
import { PedidoVendaPagamentosTableComponent } from "./pages/pedido-venda-pagamentos-table/pedido-venda-pagamentos-table.component";

const routes: Routes = [
    { path: "", component: PedidoVendaPagamentosTableComponent },
    { path: "add", component: PedidoVendaPagamentosFormComponent },
    {
        path: "edit/:id",
        component: PedidoVendaPagamentosFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PedidoVendaPagamentosRoutingModule {}
