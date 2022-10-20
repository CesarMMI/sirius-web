import { NgModule } from "@angular/core";

import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from "primeng/inputmask";
import { PasswordModule } from "primeng/password";

import { CommonModule } from "@angular/common";
import { InputTextComponent } from "./inputs/input-text/input-text.component";
import { ReactiveFormsModule } from "@angular/forms";
import { InputPasswordComponent } from "./inputs/input-password/input-password.component";
import { InputCelularComponent } from "./inputs/input-celular/input-celular.component";
import { FormWrapperComponent } from "./form-wrapper/form-wrapper.component";
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";
import { InputNumericComponent } from "./inputs/input-numeric/input-numeric.component";
import { InputNumberModule } from "primeng/inputnumber";
import { InputCpfCnpjComponent } from "./inputs/input-cpf-cnpj/input-cpf-cnpj.component";
import { InputDropdownComponent } from "./inputs/input-dropdown/input-dropdown.component";
import { DropdownModule } from "primeng/dropdown";
import { InputCepComponent } from "./inputs/input-cep/input-cep.component";

@NgModule({
  declarations: [
    InputTextComponent,
    InputPasswordComponent,
    InputCelularComponent,
    FormWrapperComponent,
    InputNumericComponent,
    InputCpfCnpjComponent,
    InputDropdownComponent,
    InputCepComponent,
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
    InputCelularComponent,
    FormWrapperComponent,
    InputNumericComponent,
    InputCpfCnpjComponent,
    InputDropdownComponent,
    InputCepComponent,
  ],
})
export class CustomFormModule {}
