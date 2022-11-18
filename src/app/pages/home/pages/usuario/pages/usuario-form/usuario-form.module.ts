import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioFormRoutingModule } from './usuario-form-routing.module';
import { UsuarioFormComponent } from './usuario-form.component';
import { UsuarioFormGeralComponent } from './pages/usuario-form-geral/usuario-form-geral.component';
import { CustomFormModule } from 'src/app/shared/components/custom-form/custom-form.module';
import { TabMenuModule } from 'primeng/tabmenu';


@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioFormGeralComponent
  ],
  imports: [
    CommonModule,
    UsuarioFormRoutingModule,
    CustomFormModule,
    TabMenuModule
  ]
})
export class UsuarioFormModule { }
