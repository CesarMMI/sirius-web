import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PedidoVendaItensRoutingModule } from "./pedido-venda-itens-routing.module";
import { PedidoVendaItensTableComponent } from "./pages/pedido-venda-itens-table/pedido-venda-itens-table.component";
import { PedidoVendaItensFormComponent } from "./pages/pedido-venda-itens-form/pedido-venda-itens-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { SelectDataModule } from "src/app/shared/components/custom-form/select-data/select-data.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

@NgModule({
    declarations: [
        PedidoVendaItensTableComponent,
        PedidoVendaItensFormComponent,
    ],
    imports: [
        CommonModule,
        PedidoVendaItensRoutingModule,
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
export class PedidoVendaItensModule {}
