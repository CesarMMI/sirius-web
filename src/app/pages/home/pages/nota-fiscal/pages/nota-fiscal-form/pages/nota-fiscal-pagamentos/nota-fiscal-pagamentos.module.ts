import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NotaFiscalPagamentosRoutingModule } from "./nota-fiscal-pagamentos-routing.module";
import { NotaFiscalPagamentosTableComponent } from "./pages/nota-fiscal-pagamentos-table/nota-fiscal-pagamentos-table.component";
import { NotaFiscalPagamentosFormComponent } from "./pages/nota-fiscal-pagamentos-form/nota-fiscal-pagamentos-form.component";
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
        NotaFiscalPagamentosTableComponent,
        NotaFiscalPagamentosFormComponent,
    ],
    imports: [
        CommonModule,
        NotaFiscalPagamentosRoutingModule,
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
export class NotaFiscalPagamentosModule {}
