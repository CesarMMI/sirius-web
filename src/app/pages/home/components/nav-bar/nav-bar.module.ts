import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SlideMenuModule } from "primeng/slidemenu";
import { SimpleWrapperModule } from "src/app/shared/components/simple-wrapper/simple-wrapper.module";
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";
import { NavBarItemComponent } from './components/nav-bar-item/nav-bar-item.component';
import { NavBarComponent } from "src/app/pages/home/components/nav-bar/components/nav-bar/nav-bar.component";

@NgModule({
  declarations: [NavBarComponent, NavBarItemComponent],
  imports: [CommonModule, SimpleWrapperModule, RouterModule, ButtonModule],
  exports: [NavBarComponent],
})
export class NavBarModule {}
