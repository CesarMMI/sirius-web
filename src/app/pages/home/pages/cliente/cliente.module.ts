import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CrudButtonsetModule } from 'src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module';
import { FilterPopupModule } from 'src/app/shared/components/buttons/filter-popup/filter-popup.module';
import { CustomFormModule } from 'src/app/shared/components/custom-form/custom-form.module';
import { SelectDataModule } from 'src/app/shared/components/custom-form/select-data/select-data.module';
import { CustomTableModule } from 'src/app/shared/components/custom-table/custom-table.module';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteTableComponent } from './pages/cliente-table/cliente-table.component';

@NgModule({
  declarations: [ClienteTableComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    CustomTableModule,
    CustomFormModule,
    CrudButtonsetModule,
    ButtonModule,
    FilterPopupModule,
  ],
})
export class ClienteModule {}
