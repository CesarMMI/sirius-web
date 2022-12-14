import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { EmpresaRoutingModule } from "./empresa-routing.module";
import { EmpresaFormComponent } from "./pages/empresa-form/empresa-form.component";
import { EmpresaTableComponent } from "./pages/empresa-table/empresa-table.component";
import { EmpresaAdvancedFilterComponent } from './pages/empresa-advanced-filter/empresa-advanced-filter.component';

@NgModule({
    declarations: [EmpresaFormComponent, EmpresaTableComponent, EmpresaAdvancedFilterComponent],
    imports: [
        CommonModule,
        EmpresaRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        CrudButtonsetModule,
        ButtonModule,
        FilterPopupModule,
    ],
})
export class EmpresaModule {}
