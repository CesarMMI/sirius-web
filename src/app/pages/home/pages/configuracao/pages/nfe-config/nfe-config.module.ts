import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NfeConfigRoutingModule } from './nfe-config-routing.module';
import { NfeConfigComponent } from './nfe-config.component';


@NgModule({
  declarations: [
    NfeConfigComponent
  ],
  imports: [
    CommonModule,
    NfeConfigRoutingModule
  ]
})
export class NfeConfigModule { }
