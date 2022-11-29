import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotaFiscalPagamentosComponent } from './nota-fiscal-pagamentos.component';

const routes: Routes = [{ path: '', component: NotaFiscalPagamentosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotaFiscalPagamentosRoutingModule { }
