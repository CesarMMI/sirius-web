import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPrecosRegsTableComponent } from './pages/lista-precos-regs-table/lista-precos-regs-table.component';

const routes: Routes = [{ path: '', component: ListaPrecosRegsTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaPrecosRegsRoutingModule { }
