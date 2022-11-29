import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectDataInputComponent } from "./select-data-input/select-data-input.component";
import { SelectDataTableComponent } from "./select-data-table/select-data-table.component";
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
import { ReactiveFormsModule } from "@angular/forms";
import { SidebarModule } from "primeng/sidebar";
import { CustomTableModule } from "../../custom-table/custom-table.module";
import { TableModule } from "primeng/table";

@NgModule({
    declarations: [SelectDataInputComponent, SelectDataTableComponent],
    imports: [
        CommonModule,
        ButtonModule,
        SidebarModule,
        InputNumberModule,
        ReactiveFormsModule,
        CustomTableModule,
        TableModule
    ],
    exports: [SelectDataInputComponent],
})
export class SelectDataModule {}
