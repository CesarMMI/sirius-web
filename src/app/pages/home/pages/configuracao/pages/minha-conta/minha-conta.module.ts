import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinhaContaRoutingModule } from './minha-conta-routing.module';
import { MinhaContaComponent } from './minha-conta.component';


@NgModule({
  declarations: [
    MinhaContaComponent
  ],
  imports: [
    CommonModule,
    MinhaContaRoutingModule
  ]
})
export class MinhaContaModule { }
