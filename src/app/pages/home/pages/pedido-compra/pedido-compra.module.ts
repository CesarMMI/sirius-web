import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CrudButtonsetModule } from 'src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module';
import { CustomFormModule } from 'src/app/shared/components/custom-form/custom-form.module';
import { CustomTableModule } from 'src/app/shared/components/custom-table/custom-table.module';

import { PedidoCompraFormComponent } from './pages/pedido-compra-form/pedido-compra-form.component';
import { PedidoCompraTableComponent } from './pages/pedido-compra-table/pedido-compra-table.component';
import { PedidoCompraRoutingModule } from './pedido-compra-routing.module';

@NgModule({
  declarations: [PedidoCompraTableComponent, PedidoCompraFormComponent],
  imports: [
    CommonModule,
    PedidoCompraRoutingModule,
    ReactiveFormsModule,
    CustomTableModule,
    CustomFormModule,
    CrudButtonsetModule,
    ButtonModule,
  ],
})
export class PedidoCompraModule {}
