import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaBarComponent } from 'src/app/pages/home/components/empresa-bar/empresa-bar.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [EmpresaBarComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    ButtonModule
  ],
  exports: [EmpresaBarComponent]
})
export class EmpresaBarModule { }
