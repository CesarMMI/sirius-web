import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { UsuarioRoutingModule } from "./usuario-routing.module";
import { UsuarioTableComponent } from "./pages/usuario-table/usuario-table.component";
import { UsuarioFormComponent } from "./pages/usuario-form/usuario-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

@NgModule({
  declarations: [UsuarioTableComponent, UsuarioFormComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule,
    CustomTableModule,
    CustomFormModule,
    CrudButtonsetModule,
    ButtonModule,
  ],
})
export class UsuarioModule {}
