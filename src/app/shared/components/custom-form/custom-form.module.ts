import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PasswordModule } from "primeng/password";
import { SidebarModule } from "primeng/sidebar";
import { ToggleButtonModule } from "primeng/togglebutton";

import { FilterPopupModule } from "../buttons/filter-popup/filter-popup.module";
import { CustomTableModule } from "../custom-table/custom-table.module";
import { FormWrapperComponent } from "./form-wrapper/form-wrapper.component";
import { InputBooleanComponent } from "./inputs/input-boolean/input-boolean.component";
import { InputCepComponent } from "./inputs/input-cep/input-cep.component";
import { InputCpfCnpjComponent } from "./inputs/input-cpf-cnpj/input-cpf-cnpj.component";
import { InputCurrencyComponent } from "./inputs/input-currency/input-currency.component";
import { InputDropdownComponent } from "./inputs/input-dropdown/input-dropdown.component";
import { InputMaskComponent } from "./inputs/input-mask/input-mask.component";
import { InputNumberComponent } from "./inputs/input-number/input-number.component";
import { InputPasswordComponent } from "./inputs/input-password/input-password.component";
import { InputPercentageComponent } from "./inputs/input-percentage/input-percentage.component";
import { InputPhoneComponent } from "./inputs/input-phone/input-phone.component";
import { InputTextAreaComponent } from "./inputs/input-text-area/input-text-area.component";
import { InputTextComponent } from "./inputs/input-text/input-text.component";
import { InputDateComponent } from "./inputs/input-date/input-date.component";
import { CalendarModule } from "primeng/calendar";
import { InputNumberRangeComponent } from './inputs/input-number-range/input-number-range.component';
import { InputCurrencyRangeComponent } from './inputs/input-currency-range/input-currency-range.component';
import { InputOrderComponent } from './inputs/input-order/input-order.component';
import { InputDateRangeComponent } from './inputs/input-date-range/input-date-range.component';

@NgModule({
    declarations: [
        InputTextComponent,
        InputPasswordComponent,
        InputPhoneComponent,
        FormWrapperComponent,
        InputNumberComponent,
        InputCpfCnpjComponent,
        InputDropdownComponent,
        InputCepComponent,
        InputCurrencyComponent,
        InputMaskComponent,
        InputTextAreaComponent,
        InputPercentageComponent,
        InputBooleanComponent,
        InputDateComponent,
        InputNumberRangeComponent,
        InputCurrencyRangeComponent,
        InputOrderComponent,
        InputDateRangeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        InputMaskModule,
        InputNumberModule,
        DropdownModule,
        InputTextareaModule,
        SidebarModule,
        FormsModule,
        CustomTableModule,
        FilterPopupModule,
        ReactiveFormsModule,
        CalendarModule,
        ToggleButtonModule,
    ],
    exports: [
        InputTextComponent,
        InputPasswordComponent,
        InputPhoneComponent,
        FormWrapperComponent,
        InputNumberComponent,
        InputCpfCnpjComponent,
        InputDropdownComponent,
        InputCepComponent,
        InputCurrencyComponent,
        InputMaskComponent,
        InputTextAreaComponent,
        InputPercentageComponent,
        InputBooleanComponent,
        InputDateComponent,
        InputNumberRangeComponent,
        InputCurrencyRangeComponent,
        InputOrderComponent,
        InputDateRangeComponent
    ],
})
export class CustomFormModule {}
