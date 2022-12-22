import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { SelectDataModule } from "src/app/shared/components/custom-form/select-data/select-data.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { ClientePrecoRoutingModule } from "./cliente-preco-routing.module";
import { ClientePrecoFormComponent } from "./pages/cliente-preco-form/cliente-preco-form.component";
import { ClientePrecoTableComponent } from "./pages/cliente-preco-table/cliente-preco-table.component";

@NgModule({
    declarations: [ClientePrecoTableComponent, ClientePrecoFormComponent],
    imports: [
        CommonModule,
        ClientePrecoRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        CrudButtonsetModule,
        ButtonModule,
        FilterPopupModule,
        SelectDataModule
    ],
})
export class ClientePrecoModule {}
