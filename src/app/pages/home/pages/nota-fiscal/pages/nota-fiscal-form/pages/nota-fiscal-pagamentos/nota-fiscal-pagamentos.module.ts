import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotaFiscalPagamentosRoutingModule } from './nota-fiscal-pagamentos-routing.module';
import { NotaFiscalPagamentosComponent } from './nota-fiscal-pagamentos.component';


@NgModule({
  declarations: [
    NotaFiscalPagamentosComponent
  ],
  imports: [
    CommonModule,
    NotaFiscalPagamentosRoutingModule
  ]
})
export class NotaFiscalPagamentosModule { }
