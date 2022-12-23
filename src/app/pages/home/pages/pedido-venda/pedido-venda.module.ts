import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { RotinasPopupModule } from "src/app/shared/components/buttons/rotinas-popup/rotinas-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { PedidoVendaTableComponent } from "./pages/pedido-venda-table/pedido-venda-table.component";
import { PedidoVendaRoutingModule } from "./pedido-venda-routing.module";
import { PedidoVendaAdvancedFilterComponent } from './pages/pedido-venda-advanced-filter/pedido-venda-advanced-filter.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [PedidoVendaTableComponent, PedidoVendaAdvancedFilterComponent],
    imports: [
        CommonModule,
        PedidoVendaRoutingModule,
        CustomTableModule,
        CustomFormModule,
        ReactiveFormsModule,
        ButtonModule,
        CrudButtonsetModule,
        FilterPopupModule,
        RotinasPopupModule,
    ],
})
export class PedidoVendaModule {}
