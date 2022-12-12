import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ListaPrecosRegsRoutingModule } from "./lista-precos-regs-routing.module";
import { ListaPrecosRegsFormComponent } from "./pages/lista-precos-regs-form/lista-precos-regs-form.component";
import { ListaPrecosRegsTableComponent } from "./pages/lista-precos-regs-table/lista-precos-regs-table.component";

@NgModule({
    declarations: [ListaPrecosRegsTableComponent, ListaPrecosRegsFormComponent],
    imports: [CommonModule, ListaPrecosRegsRoutingModule],
})
export class ListaPrecosRegsModule {}
