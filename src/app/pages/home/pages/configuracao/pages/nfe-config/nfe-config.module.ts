import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NfeConfigRoutingModule } from './nfe-config-routing.module';
import { NfeConfigComponent } from './nfe-config.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormModule } from 'src/app/shared/components/custom-form/custom-form.module';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    NfeConfigComponent
  ],
  imports: [
    CommonModule,
    NfeConfigRoutingModule,
    ReactiveFormsModule,
    CustomFormModule,
    ButtonModule
  ]
})
export class NfeConfigModule { }
