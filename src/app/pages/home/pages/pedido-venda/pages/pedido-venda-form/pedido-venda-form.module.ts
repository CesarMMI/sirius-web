import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PedidoVendaFormRoutingModule } from "./pedido-venda-form-routing.module";
import { PedidoVendaFormComponent } from "./pedido-venda-form.component";
import { PedidoVendaFormGeralComponent } from "./pages/pedido-venda-form-geral/pedido-venda-form-geral.component";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";
import { TabMenuModule } from "primeng/tabmenu";
import { ReactiveFormsModule } from "@angular/forms";
import { SelectDataModule } from "src/app/shared/components/custom-form/select-data/select-data.module";

@NgModule({
    declarations: [PedidoVendaFormComponent, PedidoVendaFormGeralComponent],
    imports: [
        CommonModule,
        PedidoVendaFormRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        ButtonModule,
        CrudButtonsetModule,
        FilterPopupModule,
        TabMenuModule,
        SelectDataModule
    ],
})
export class PedidoVendaFormModule {}
