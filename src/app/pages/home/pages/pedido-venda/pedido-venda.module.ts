import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CrudButtonsetModule } from 'src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module';
import { FilterPopupModule } from 'src/app/shared/components/buttons/filter-popup/filter-popup.module';
import { CustomFormModule } from 'src/app/shared/components/custom-form/custom-form.module';
import { CustomTableModule } from 'src/app/shared/components/custom-table/custom-table.module';

import { PedidoVendaFormComponent } from './pages/pedido-venda-form/pedido-venda-form.component';
import { PedidoVendaTableComponent } from './pages/pedido-venda-table/pedido-venda-table.component';
import { PedidoVendaRoutingModule } from './pedido-venda-routing.module';


@NgModule({
  declarations: [
    PedidoVendaTableComponent
  ],
  imports: [
    CommonModule,
    PedidoVendaRoutingModule,
    CustomTableModule,
    CustomFormModule,
    ButtonModule,
    CrudButtonsetModule, 
    FilterPopupModule
  ]
})
export class PedidoVendaModule { }
