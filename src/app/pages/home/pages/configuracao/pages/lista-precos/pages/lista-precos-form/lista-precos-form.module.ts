import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { ToggleButtonModule } from "primeng/togglebutton";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { RotinasPopupModule } from "src/app/shared/components/buttons/rotinas-popup/rotinas-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { ListaPrecosFormRoutingModule } from "./lista-precos-form-routing.module";
import { ListaPrecosFormComponent } from "./lista-precos-form.component";

@NgModule({
    declarations: [ListaPrecosFormComponent],
    imports: [
        CommonModule,
        ListaPrecosFormRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        ButtonModule,
        CrudButtonsetModule,
        RotinasPopupModule,
        FilterPopupModule,
    ],
})
export class ListaPrecosFormModule {}
