import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { CustomTableComponent } from 'src/app/shared/components/custom-table/components/custom-table/custom-table.component';
import { CepPipe } from 'src/app/shared/pipes/cep.pipe';
import { CpfCnpjPipe } from 'src/app/shared/pipes/cpf-cnpj.pipe';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

import { CrudButtonsetComponent } from './components/crud-buttonset/crud-buttonset.component';
import { CustomTableSkeletonComponent } from './components/custom-table-skeleton/custom-table-skeleton.component';
import { CustomTablePaginatorComponent } from './components/custom-table-paginator/custom-table-paginator.component';
import { CustomTableHeaderComponent } from './components/custom-table-header/custom-table-header.component';

@NgModule({
  declarations: [
    CustomTableComponent,
    CrudButtonsetComponent,
    CustomTableHeaderComponent,
    CustomTableSkeletonComponent,
    CustomTablePaginatorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    PipesModule,
    SkeletonModule,
    ConfirmPopupModule,
  ],
  exports: [
    CustomTableComponent,
    CrudButtonsetComponent,
    CustomTableHeaderComponent,
    CustomTableSkeletonComponent,
    CustomTablePaginatorComponent,
  ],
  providers: [ConfirmationService, CpfCnpjPipe, CepPipe, CurrencyPipe, DatePipe],
})
export class CustomTableModule { }
