import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmpresaBarModule } from 'src/app/pages/home/components/empresa-bar/empresa-bar.module';
import { SimpleWrapperModule } from 'src/app/shared/components/simple-wrapper/simple-wrapper.module';

import { LogoComponent } from './components/logo/logo.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, LogoComponent], 
  imports: [CommonModule, HomeRoutingModule, SimpleWrapperModule, NavBarModule, EmpresaBarModule],
})
export class HomeModule { }
