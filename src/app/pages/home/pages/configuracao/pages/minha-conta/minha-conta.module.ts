import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinhaContaRoutingModule } from './minha-conta-routing.module';
import { MinhaContaComponent } from './minha-conta.component';
import { CustomFormModule } from 'src/app/shared/components/custom-form/custom-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    MinhaContaComponent
  ],
  imports: [
    CommonModule,
    MinhaContaRoutingModule,
    CustomFormModule,
    ReactiveFormsModule,
    DividerModule,
    ButtonModule,
    DialogModule
  ]
})
export class MinhaContaModule { }
