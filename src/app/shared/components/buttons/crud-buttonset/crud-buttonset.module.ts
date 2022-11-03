import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CrudButtonsetComponent } from 'src/app/shared/components/buttons/crud-buttonset/crud-buttonset.component';



@NgModule({
  declarations: [CrudButtonsetComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    ConfirmPopupModule
  ],
  exports: [
    CrudButtonsetComponent
  ]
})
export class CrudButtonsetModule { }
