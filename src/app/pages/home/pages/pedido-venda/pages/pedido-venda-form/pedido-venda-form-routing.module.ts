import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PedidoVendaFormGeralComponent } from "./pages/pedido-venda-form-geral/pedido-venda-form-geral.component";
import { PedidoVendaFormComponent } from "./pedido-venda-form.component";

const routes: Routes = [
    {
        path: "",
        component: PedidoVendaFormComponent,
        children: [
            { path: "", redirectTo: "geral", pathMatch: "full" },
            { path: "geral", component: PedidoVendaFormGeralComponent },
            {
                path: "itens",
                loadChildren: () =>
                    import(
                        "./pages/pedido-venda-itens/pedido-venda-itens.module"
                    ).then((m) => m.PedidoVendaItensModule),
            },
            {
                path: "pagamentos",
                loadChildren: () =>
                    import(
                        "./pages/pedido-venda-pagamentos/pedido-venda-pagamentos.module"
                    ).then((m) => m.PedidoVendaPagamentosModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PedidoVendaFormRoutingModule {}
