import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoVendaFormComponent } from 'src/app/pages/home/pages/pedido-venda/pages/pedido-venda-form/pedido-venda-form.component';
import { PedidoVendaTableComponent } from 'src/app/pages/home/pages/pedido-venda/pages/pedido-venda-table/pedido-venda-table.component';

const routes: Routes = [
  { path: "", component: PedidoVendaTableComponent },
  { path: "add", component: PedidoVendaFormComponent },
  { path: "edit/:id", component: PedidoVendaFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoVendaRoutingModule { }
