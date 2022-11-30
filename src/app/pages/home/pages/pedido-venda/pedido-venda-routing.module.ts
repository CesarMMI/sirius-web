import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PedidoVendaTableComponent } from "src/app/pages/home/pages/pedido-venda/pages/pedido-venda-table/pedido-venda-table.component";

const routes: Routes = [
    { path: "", component: PedidoVendaTableComponent },
    {
        path: "add",
        loadChildren: () =>
            import("./pages/pedido-venda-form/pedido-venda-form.module").then(
                (m) => m.PedidoVendaFormModule
            ),
    },
    {
        path: "edit/:id",
        loadChildren: () =>
            import("./pages/pedido-venda-form/pedido-venda-form.module").then(
                (m) => m.PedidoVendaFormModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PedidoVendaRoutingModule {}
