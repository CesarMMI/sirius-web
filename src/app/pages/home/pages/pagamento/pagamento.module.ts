import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { PagamentoRoutingModule } from "./pagamento-routing.module";
import { PagamentoFormComponent } from "./pages/pagamento-form/pagamento-form.component";
import { PagamentoTableComponent } from "./pages/pagamento-table/pagamento-table.component";

@NgModule({
    declarations: [PagamentoTableComponent, PagamentoFormComponent],
    imports: [
        CommonModule,
        PagamentoRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        ButtonModule,
        CrudButtonsetModule,
        FilterPopupModule
    ],
})
export class PagamentoModule {}
