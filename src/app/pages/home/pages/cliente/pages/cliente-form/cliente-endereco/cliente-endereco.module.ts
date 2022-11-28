import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { ClienteEnderecoRoutingModule } from "./cliente-endereco-routing.module";
import { ClienteEnderecoFormComponent } from "./pages/cliente-endereco-form/cliente-endereco-form.component";
import { ClienteEnderecoTableComponent } from "./pages/cliente-endereco-table/cliente-endereco-table.component";

@NgModule({
    declarations: [ClienteEnderecoTableComponent, ClienteEnderecoFormComponent],
    imports: [
        CommonModule,
        ClienteEnderecoRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        CrudButtonsetModule,
        ButtonModule,
        FilterPopupModule,
    ],
})
export class ClienteEnderecoModule {}
