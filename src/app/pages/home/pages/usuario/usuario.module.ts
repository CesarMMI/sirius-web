import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { RotinasPopupModule } from "src/app/shared/components/buttons/rotinas-popup/rotinas-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { SelectDataModule } from "src/app/shared/components/custom-form/select-data/select-data.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { UsuarioFormComponent } from "./pages/usuario-form/usuario-form.component";
import { AdicionarUsuarioComponent } from "./pages/usuario-table/rotinas/adicionar-usuario/adicionar-usuario.component";
import { UsuarioTableComponent } from "./pages/usuario-table/usuario-table.component";
import { UsuarioRoutingModule } from "./usuario-routing.module";
import { MudarGrupoComponent } from './pages/usuario-table/rotinas/mudar-grupo/mudar-grupo.component';
import { UsuarioAdvancedFilterComponent } from './pages/usuario-advanced-filter/usuario-advanced-filter.component';

@NgModule({
    declarations: [
        UsuarioTableComponent,
        UsuarioFormComponent,
        AdicionarUsuarioComponent,
        MudarGrupoComponent,
        UsuarioAdvancedFilterComponent,
    ],
    imports: [
        CommonModule,
        UsuarioRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        CrudButtonsetModule,
        ButtonModule,
        FilterPopupModule,
        RotinasPopupModule,
        DialogModule,
        SelectDataModule,
    ],
})
export class UsuarioModule {}
