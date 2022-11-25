import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoUsuariosComponent } from './grupo-usuarios.component';

const routes: Routes = [{ path: '', component: GrupoUsuariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoUsuariosRoutingModule { }
