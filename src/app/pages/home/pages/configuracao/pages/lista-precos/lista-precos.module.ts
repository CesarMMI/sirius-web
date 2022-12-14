import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { ListaPrecosRoutingModule } from "./lista-precos-routing.module";
import { ListaPrecosTableComponent } from "./pages/lista-precos-table/lista-precos-table.component";

@NgModule({
    declarations: [ListaPrecosTableComponent],
    imports: [
        CommonModule,
        ListaPrecosRoutingModule,
        CustomTableModule,
        CustomFormModule,
        ButtonModule,
        CrudButtonsetModule,
        FilterPopupModule,
    ],
})
export class ListaPrecosModule {}
