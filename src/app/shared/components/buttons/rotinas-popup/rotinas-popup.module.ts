import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotinasPopupComponent } from './rotinas-popup.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RotinasPopupComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    OverlayPanelModule,
    MenuModule
  ],
  exports: [
    RotinasPopupComponent
  ]
})
export class RotinasPopupModule { }
