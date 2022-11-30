import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { SelectDataModule } from "src/app/shared/components/custom-form/select-data/select-data.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { PedidoVendaPagamentosFormComponent } from "./pages/pedido-venda-pagamentos-form/pedido-venda-pagamentos-form.component";
import { PedidoVendaPagamentosTableComponent } from "./pages/pedido-venda-pagamentos-table/pedido-venda-pagamentos-table.component";
import { PedidoVendaPagamentosRoutingModule } from "./pedido-venda-pagamentos-routing.module";

@NgModule({
    declarations: [
        PedidoVendaPagamentosTableComponent,
        PedidoVendaPagamentosFormComponent,
    ],
    imports: [
        CommonModule,
        PedidoVendaPagamentosRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        CrudButtonsetModule,
        ButtonModule,
        FilterPopupModule,
        TabViewModule,
        SelectDataModule,
    ],
})
export class PedidoVendaPagamentosModule {}
