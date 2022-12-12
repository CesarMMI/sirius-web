import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListaPrecosRegsFormComponent } from "./pages/lista-precos-regs-form/lista-precos-regs-form.component";
import { ListaPrecosRegsTableComponent } from "./pages/lista-precos-regs-table/lista-precos-regs-table.component";

const routes: Routes = [
    { path: "", component: ListaPrecosRegsTableComponent },
    { path: "add", component: ListaPrecosRegsFormComponent },
    { path: "edit/:idReg", component: ListaPrecosRegsFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListaPrecosRegsRoutingModule {}
