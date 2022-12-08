import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToggleButtonModule } from "primeng/togglebutton";

import { GrupoUsuariosRoutingModule } from "./grupo-usuarios-routing.module";
import { GrupoUsuariosTableComponent } from "./pages/grupo-usuarios-table/grupo-usuarios-table.component";
import { GrupoUsuariosFormComponent } from "./pages/grupo-usuarios-form/grupo-usuarios-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { RotinasPopupModule } from "src/app/shared/components/buttons/rotinas-popup/rotinas-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";
import { TableModule } from "primeng/table";

@NgModule({
    declarations: [GrupoUsuariosTableComponent, GrupoUsuariosFormComponent],
    imports: [
        CommonModule,
        GrupoUsuariosRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        ButtonModule,
        CrudButtonsetModule,
        RotinasPopupModule,
        FilterPopupModule,
        TableModule,
        ToggleButtonModule,
    ],
})
export class GrupoUsuariosModule {}
