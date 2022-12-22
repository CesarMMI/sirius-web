import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ClientePrecoFormComponent } from "./pages/cliente-preco-form/cliente-preco-form.component";
import { ClientePrecoTableComponent } from "./pages/cliente-preco-table/cliente-preco-table.component";

const routes: Routes = [
    { path: "", component: ClientePrecoTableComponent },
    { path: "add", component: ClientePrecoFormComponent },
    { path: "edit/:id", component: ClientePrecoFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientePrecoRoutingModule {}
