import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { NotaFiscalRoutingModule } from "./nota-fiscal-routing.module";
import { NotaFiscalTableComponent } from "./pages/nota-fiscal-table/nota-fiscal-table.component";
import { NotaFiscalAdvancedFilterComponent } from './pages/nota-fiscal-advanced-filter/nota-fiscal-advanced-filter.component';

@NgModule({
    declarations: [NotaFiscalTableComponent, NotaFiscalAdvancedFilterComponent],
    imports: [
        CommonModule,
        NotaFiscalRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        CrudButtonsetModule,
        ButtonModule,
        FilterPopupModule,
    ],
})
export class NotaFiscalModule {}
