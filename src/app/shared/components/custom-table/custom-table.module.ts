import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { CepPipe } from 'src/app/shared/pipes/cep.pipe';
import { CpfCnpjPipe } from 'src/app/shared/pipes/cpf-cnpj.pipe';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { StatusPipe } from 'src/app/shared/pipes/status.pipe';


import { CustomTableBodyComponent } from './components/custom-table-body/custom-table-body.component';
import { CustomTableHeaderComponent } from './components/custom-table-header/custom-table-header.component';
import { CustomTablePaginatorComponent } from './components/custom-table-paginator/custom-table-paginator.component';
import { CustomTableSkeletonComponent } from './components/custom-table-skeleton/custom-table-skeleton.component';
import { CustomTableWrapperComponent } from './components/custom-table-wrapper/custom-table-wrapper.component';

@NgModule({
  declarations: [
    CustomTableHeaderComponent,
    CustomTableSkeletonComponent,
    CustomTablePaginatorComponent,
    CustomTableBodyComponent,
    CustomTableWrapperComponent,
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
    CustomTableWrapperComponent,
    CustomTableBodyComponent,
    CustomTableSkeletonComponent
  ],
  providers: [ConfirmationService, CpfCnpjPipe, CepPipe, StatusPipe, CurrencyPipe, DatePipe],
})
export class CustomTableModule { }
