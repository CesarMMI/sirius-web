import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotaFiscalFormRoutingModule } from './nota-fiscal-form-routing.module';
import { NotaFiscalFormComponent } from './nota-fiscal-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { CustomFormModule } from 'src/app/shared/components/custom-form/custom-form.module';
import { NotaFiscalFormGeralComponent } from './pages/nota-fiscal-form-geral/nota-fiscal-form-geral.component';
import { NotaFiscalFormDestinatarioComponent } from './pages/nota-fiscal-form-destinatario/nota-fiscal-form-destinatario.component';
import { NotaFiscalFormInfosComponent } from './pages/nota-fiscal-form-infos/nota-fiscal-form-infos.component';
import { NotaFiscalFormTotalizadoresComponent } from './pages/nota-fiscal-form-totalizadores/nota-fiscal-form-totalizadores.component';
import { NotaFiscalFormRetornowsComponent } from './pages/nota-fiscal-form-retornows/nota-fiscal-form-retornows.component';

import { SelectDataModule } from '../../../../../../shared/components/custom-form/select-data/select-data.module';


@NgModule({
  declarations: [
    NotaFiscalFormComponent,
    NotaFiscalFormGeralComponent,
    NotaFiscalFormDestinatarioComponent,
    NotaFiscalFormInfosComponent,
    NotaFiscalFormTotalizadoresComponent,
    NotaFiscalFormRetornowsComponent
  ],
  imports: [
    CommonModule,
    NotaFiscalFormRoutingModule,
    ReactiveFormsModule,
    TabMenuModule,
    CustomFormModule,
    ButtonModule,
    SelectDataModule
  ]
})
export class NotaFiscalFormModule { }
