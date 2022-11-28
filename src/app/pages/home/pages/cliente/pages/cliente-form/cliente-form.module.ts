import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteFormRoutingModule } from './cliente-form-routing.module';
import { ClienteFormComponent } from './cliente-form.component';
import { ClienteFormGeralComponent } from './cliente-form-geral/cliente-form-geral.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { CustomFormModule } from 'src/app/shared/components/custom-form/custom-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ClienteFormComponent,
    ClienteFormGeralComponent
  ],
  imports: [
    CommonModule,
    ClienteFormRoutingModule,
    ReactiveFormsModule,
    TabMenuModule,
    CustomFormModule,
    ButtonModule
  ]
})
export class ClienteFormModule { }
