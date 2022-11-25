import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPrecosComponent } from './lista-precos.component';

const routes: Routes = [{ path: '', component: ListaPrecosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaPrecosRoutingModule { }
