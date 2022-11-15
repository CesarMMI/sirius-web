import { CommonModule } from "@angular/common";


import { SimpleWrapperModule } from "src/app/shared/components/simple-wrapper/simple-wrapper.module";
import { ButtonModule } from "primeng/button";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { RouterModule } from "@angular/router";
import { NavBarItemComponent } from "./components/nav-bar-item/nav-bar-item.component";
import { NavBarComponent } from "src/app/pages/home/components/nav-bar/components/nav-bar/nav-bar.component";
import { NavBarPopupComponent } from "./components/nav-bar-popup/nav-bar-popup.component";

@NgModule({
  declarations: [NavBarComponent, NavBarItemComponent, NavBarPopupComponent],
  imports: [CommonModule, SimpleWrapperModule, RouterModule, ButtonModule, OverlayPanelModule],
  exports: [NavBarComponent, NavBarPopupComponent],
})
export class NavBarModule {}
