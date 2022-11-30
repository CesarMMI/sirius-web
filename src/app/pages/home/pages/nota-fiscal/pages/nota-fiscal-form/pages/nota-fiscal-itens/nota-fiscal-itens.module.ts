import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { FilterPopupModule } from "src/app/shared/components/buttons/filter-popup/filter-popup.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { NotaFiscalItensRoutingModule } from "./nota-fiscal-itens-routing.module";
import { NotaFiscalItensFormComponent } from "./pages/nota-fiscal-itens-form/nota-fiscal-itens-form.component";
import { NotaFiscalItensTableComponent } from "./pages/nota-fiscal-itens-table/nota-fiscal-itens-table.component";
import { SelectDataModule } from "../../../../../../../../shared/components/custom-form/select-data/select-data.module";

@NgModule({
    declarations: [NotaFiscalItensTableComponent, NotaFiscalItensFormComponent],
    imports: [
        CommonModule,
        NotaFiscalItensRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        CrudButtonsetModule,
        ButtonModule,
        FilterPopupModule,
        TabViewModule,
        SelectDataModule
    ]
})
export class NotaFiscalItensModule {}
