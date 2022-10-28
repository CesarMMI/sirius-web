import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";

import { CustomFormModule } from "../../shared/components/custom-form/custom-form.module";
import { SimpleWrapperModule } from "../../shared/components/simple-wrapper/simple-wrapper.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { SingupComponent } from "./pages/singup/singup.component";
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';

@NgModule({
  declarations: [LoginComponent, SingupComponent, AuthWrapperComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CustomFormModule,
    ButtonModule,
    DividerModule,
    SimpleWrapperModule,
  ],
  providers: [],
})
export class AuthModule {}
