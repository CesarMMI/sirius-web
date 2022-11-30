import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectDataInputComponent } from "./select-data-input/select-data-input.component";
import { SelectDataTableComponent } from "./select-data-table/select-data-table.component";
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogModule } from "primeng/dialog";
import { CustomTableModule } from "../../custom-table/custom-table.module";
import { TableModule } from "primeng/table";
import { SidebarModule } from "primeng/sidebar";
import { FilterPopupModule } from "../../buttons/filter-popup/filter-popup.module";

@NgModule({
    declarations: [SelectDataInputComponent, SelectDataTableComponent],
    imports: [
        CommonModule,
        ButtonModule,
        DialogModule,
        SidebarModule,
        InputNumberModule,
        ReactiveFormsModule,
        CustomTableModule,
        TableModule,
        FilterPopupModule
    ],
    exports: [SelectDataInputComponent],
})
export class SelectDataModule {}
