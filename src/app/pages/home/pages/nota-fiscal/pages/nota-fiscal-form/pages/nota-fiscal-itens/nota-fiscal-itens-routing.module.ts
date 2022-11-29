import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotaFiscalItensComponent } from './nota-fiscal-itens.component';

const routes: Routes = [{ path: '', component: NotaFiscalItensComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotaFiscalItensRoutingModule { }
