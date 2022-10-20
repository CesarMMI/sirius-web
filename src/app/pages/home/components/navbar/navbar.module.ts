import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuModule } from "primeng/menu";
import { NavbarComponent } from "src/app/pages/home/components/navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MenuModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
