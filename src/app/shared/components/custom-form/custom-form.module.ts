import { NgModule } from "@angular/core";

import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from "primeng/inputmask";
import { PasswordModule } from "primeng/password";

import { CommonModule } from "@angular/common";
import { InputTextComponent } from "./inputs/input-text/input-text.component";
import { ReactiveFormsModule } from "@angular/forms";
import { InputPasswordComponent } from "./inputs/input-password/input-password.component";
import { InputPhoneComponent } from "./inputs/input-phone/input-phone.component";
import { FormWrapperComponent } from "./form-wrapper/form-wrapper.component";
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";
import { InputNumberComponent } from "./inputs/input-number/input-number.component";
import { InputNumberModule } from "primeng/inputnumber";
import { InputCpfCnpjComponent } from "./inputs/input-cpf-cnpj/input-cpf-cnpj.component";
import { InputDropdownComponent } from "./inputs/input-dropdown/input-dropdown.component";
import { DropdownModule } from "primeng/dropdown";
import { InputCepComponent } from "./inputs/input-cep/input-cep.component";
import { InputCurrencyComponent } from './inputs/input-currency/input-currency.component';

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
    ReactiveFormsModule,
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
  ],
})
export class CustomFormModule { }
