import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PedidoVendaItensFormComponent } from "./pages/pedido-venda-itens-form/pedido-venda-itens-form.component";
import { PedidoVendaItensTableComponent } from "./pages/pedido-venda-itens-table/pedido-venda-itens-table.component";

const routes: Routes = [
    { path: "", component: PedidoVendaItensTableComponent },
    { path: "add", component: PedidoVendaItensFormComponent },
    {
        path: "edit/:id",
        component: PedidoVendaItensFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PedidoVendaItensRoutingModule {}
