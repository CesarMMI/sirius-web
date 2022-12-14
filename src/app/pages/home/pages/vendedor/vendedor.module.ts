import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { VendedorFormComponent } from "./pages/vendedor-form/vendedor-form.component";
import { VendedorTableComponent } from "./pages/vendedor-table/vendedor-table.component";
import { VendedorRoutingModule } from "./vendedor-routing.module";
import { VendedorAdvancedFilterComponent } from './pages/vendedor-advanced-filter/vendedor-advanced-filter.component';

@NgModule({
  declarations: [VendedorTableComponent, VendedorFormComponent, VendedorAdvancedFilterComponent],
  imports: [
    CommonModule,
    VendedorRoutingModule,
    ReactiveFormsModule,
    CustomTableModule,
    CustomFormModule,
    CrudButtonsetModule,
    ButtonModule,
    FilterPopupModule
  ],
})
export class VendedorModule {}
