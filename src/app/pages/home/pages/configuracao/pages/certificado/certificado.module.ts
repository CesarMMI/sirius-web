import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadoRoutingModule } from './certificado-routing.module';
import { CertificadoComponent } from './certificado.component';


@NgModule({
  declarations: [
    CertificadoComponent
  ],
  imports: [
    CommonModule,
    CertificadoRoutingModule
  ]
})
export class CertificadoModule { }
