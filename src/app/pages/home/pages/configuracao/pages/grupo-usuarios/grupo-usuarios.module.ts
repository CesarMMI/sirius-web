import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoUsuariosRoutingModule } from './grupo-usuarios-routing.module';
import { GrupoUsuariosComponent } from './grupo-usuarios.component';


@NgModule({
  declarations: [
    GrupoUsuariosComponent
  ],
  imports: [
    CommonModule,
    GrupoUsuariosRoutingModule
  ]
})
export class GrupoUsuariosModule { }
