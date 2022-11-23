import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { OverlayPanelModule } from "primeng/overlaypanel";

import { CustomFormModule } from "../../custom-form/custom-form.module";
import { FiltrosPopupComponent } from "./filtros-popup.component";
import { FiltrosPopupSearchComponent } from "./components/filtros-popup-search/filtros-popup-search.component";
import { FiltrosPopupOrderComponent } from "./components/filtros-popup-order/filtros-popup-order.component";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        FiltrosPopupComponent,
        FiltrosPopupSearchComponent,
        FiltrosPopupOrderComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        OverlayPanelModule,
        FormsModule,
        DropdownModule,
        InputTextModule,
        ButtonModule,
    ],
    exports: [FiltrosPopupComponent],
})
export class FiltrosPopupModule {}
