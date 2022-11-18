import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TabMenuModule } from "primeng/tabmenu";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { UsuarioTableComponent } from "./pages/usuario-table/usuario-table.component";
import { UsuarioRoutingModule } from "./usuario-routing.module";

@NgModule({
  declarations: [UsuarioTableComponent],
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
