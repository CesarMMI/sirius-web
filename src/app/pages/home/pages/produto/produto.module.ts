import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { ProdutoTableComponent } from "./pages/produto-table/produto-table.component";
import { ProdutoRoutingModule } from "./produto-routing.module";
import { CrudButtonsetModule } from '../../../../shared/components/buttons/crud-buttonset/crud-buttonset.module';
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ProdutoFormComponent } from "src/app/pages/home/pages/produto/pages/produto-form/produto-form.component";
import { RotinasPopupModule } from '../../../../shared/components/buttons/rotinas-popup/rotinas-popup.module';
import { FiltrosPopupModule } from '../../../../shared/components/buttons/filtros-popup/filtros-popup.module';

@NgModule({
  declarations: [
    ProdutoTableComponent,
    ProdutoFormComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ReactiveFormsModule,
    CustomTableModule,
    CustomFormModule,
    ButtonModule,
    CrudButtonsetModule,
    RotinasPopupModule,
    FiltrosPopupModule
  ],
})
export class ProdutoModule { }
