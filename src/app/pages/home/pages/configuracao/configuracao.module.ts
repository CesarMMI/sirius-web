import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracaoRoutingModule } from './configuracao-routing.module';
import { ConfiguracaoComponent } from './configuracao.component';


@NgModule({
  declarations: [
    ConfiguracaoComponent
  ],
  imports: [
    CommonModule,
    ConfiguracaoRoutingModule
  ]
})
export class ConfiguracaoModule { }
