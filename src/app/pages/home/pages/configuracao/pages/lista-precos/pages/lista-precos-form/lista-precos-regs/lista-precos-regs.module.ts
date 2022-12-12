import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CrudButtonsetModule } from 'src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module';
import { FilterPopupModule } from 'src/app/shared/components/buttons/filter-popup/filter-popup.module';
import { RotinasPopupModule } from 'src/app/shared/components/buttons/rotinas-popup/rotinas-popup.module';
import { CustomFormModule } from 'src/app/shared/components/custom-form/custom-form.module';
import { SelectDataModule } from 'src/app/shared/components/custom-form/select-data/select-data.module';
import { CustomTableModule } from 'src/app/shared/components/custom-table/custom-table.module';

import { ListaPrecosRegsRoutingModule } from './lista-precos-regs-routing.module';
import { ListaPrecosRegsFormComponent } from './pages/lista-precos-regs-form/lista-precos-regs-form.component';
import { ListaPrecosRegsTableComponent } from './pages/lista-precos-regs-table/lista-precos-regs-table.component';

@NgModule({
    declarations: [ListaPrecosRegsTableComponent, ListaPrecosRegsFormComponent],
    imports: [
        CommonModule,
        ListaPrecosRegsRoutingModule,
        ReactiveFormsModule,
        CustomTableModule,
        CustomFormModule,
        ButtonModule,
        CrudButtonsetModule,
        RotinasPopupModule,
        FilterPopupModule,
        SelectDataModule
    ],
})
export class ListaPrecosRegsModule {}
