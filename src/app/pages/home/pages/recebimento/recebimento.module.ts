import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { SelectDataModule } from "src/app/shared/components/custom-form/select-data/select-data.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { RecebimentoFormComponent } from "./pages/recebimento-form/recebimento-form.component";
import { RecebimentoTableComponent } from "./pages/recebimento-table/recebimento-table.component";
import { RecebimentoRoutingModule } from "./recebimento-routing.module";
import { RecebimentoAdvancedFilterComponent } from './pages/recebimento-advanced-filter/recebimento-advanced-filter.component';

@NgModule({
    declarations: [RecebimentoTableComponent, RecebimentoFormComponent, RecebimentoAdvancedFilterComponent],
    imports: [
        CommonModule,
        RecebimentoRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        ButtonModule,
        CrudButtonsetModule,
        FilterPopupModule,
        SelectDataModule,
    ],
})
export class RecebimentoModule {}
