import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPrecosRoutingModule } from './lista-precos-routing.module';
import { ListaPrecosComponent } from './lista-precos.component';
import { ListaPrecosTableComponent } from './pages/lista-precos-table/lista-precos-table.component';


@NgModule({
  declarations: [
    ListaPrecosComponent,
    ListaPrecosTableComponent
  ],
  imports: [
    CommonModule,
    ListaPrecosRoutingModule
  ]
})
export class ListaPrecosModule { }
