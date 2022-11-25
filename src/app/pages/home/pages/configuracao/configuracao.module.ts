import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TabMenuModule } from "primeng/tabmenu";

import { ConfiguracaoRoutingModule } from "./configuracao-routing.module";
import { ConfiguracaoComponent } from "./configuracao.component";

@NgModule({
    declarations: [ConfiguracaoComponent],
    imports: [CommonModule, ConfiguracaoRoutingModule, TabMenuModule],
})
export class ConfiguracaoModule {}
