import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AuthService } from 'src/app/pages/auth/services/auth.service';

import { CustomFormModule } from '../../shared/components/custom-form/custom-form.module';
import { SimpleWrapperModule } from '../../shared/components/simple-wrapper/simple-wrapper.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';

@NgModule({
  declarations: [LoginComponent, SingupComponent],
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
  providers: [AuthService],
})
export class AuthModule {}
