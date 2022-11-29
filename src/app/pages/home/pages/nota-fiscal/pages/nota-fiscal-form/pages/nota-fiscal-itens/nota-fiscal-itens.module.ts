import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotaFiscalItensRoutingModule } from './nota-fiscal-itens-routing.module';
import { NotaFiscalItensComponent } from './nota-fiscal-itens.component';


@NgModule({
  declarations: [
    NotaFiscalItensComponent
  ],
  imports: [
    CommonModule,
    NotaFiscalItensRoutingModule
  ]
})
export class NotaFiscalItensModule { }
