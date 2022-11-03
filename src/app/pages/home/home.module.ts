import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { EmpresaBarModule } from "./components/empresa-bar/empresa-bar.module";
import { HomeWrapperComponent } from "./components/home-wrapper/home-wrapper.component";
import { NavBarModule } from "./components/nav-bar/nav-bar.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [HomeComponent, HomeWrapperComponent],
  imports: [CommonModule, HomeRoutingModule, NavBarModule, EmpresaBarModule],
})
export class HomeModule {}
