import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SlideMenuModule } from "primeng/slidemenu";

import { NavBarComponent } from "src/app/pages/home/components/nav-bar/nav-bar.component";
import { SimpleWrapperModule } from "src/app/shared/components/simple-wrapper/simple-wrapper.module";

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, SimpleWrapperModule, SlideMenuModule],
  exports: [NavBarComponent],
})
export class NavBarModule {}
