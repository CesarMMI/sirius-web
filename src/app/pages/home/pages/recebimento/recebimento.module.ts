import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { RecebimentoFormComponent } from "./pages/recebimento-form/recebimento-form.component";
import { RecebimentoTableComponent } from "./pages/recebimento-table/recebimento-table.component";
import { RecebimentoRoutingModule } from "./recebimento-routing.module";

@NgModule({
    declarations: [RecebimentoTableComponent, RecebimentoFormComponent],
    imports: [
        CommonModule,
        RecebimentoRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        ButtonModule,
        CrudButtonsetModule,
    ],
})
export class RecebimentoModule {}
