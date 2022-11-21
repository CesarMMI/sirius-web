import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PedidoCompraFormComponent } from "./pages/pedido-compra-form/pedido-compra-form.component";
import { PedidoCompraTableComponent } from "./pages/pedido-compra-table/pedido-compra-table.component";

const routes: Routes = [
  { path: "", component: PedidoCompraTableComponent },
  { path: "add", component: PedidoCompraFormComponent },
  {
    path: "edit/:id",
    component: PedidoCompraFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoCompraRoutingModule {}
