import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { OverlayPanelModule } from "primeng/overlaypanel";

import { CustomFormModule } from "../../custom-form/custom-form.module";
import { FilterPopupComponent } from "./filter-popup.component";
import { FilterPopupSearchComponent } from "./components/filter-popup-search/filter-popup-search.component";
import { FilterPopupOrderComponent } from "./components/filter-popup-order/filter-popup-order.component";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { FilterAdvancedModule } from './filter-advanced/filter-advanced.module';

@NgModule({
    declarations: [
        FilterPopupComponent,
        FilterPopupSearchComponent,
        FilterPopupOrderComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        OverlayPanelModule,
        FormsModule,
        DropdownModule,
        InputTextModule,
        ButtonModule,
        FilterAdvancedModule,
    ],
    exports: [FilterPopupComponent],
})
export class FilterPopupModule {}
