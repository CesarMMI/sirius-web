import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ClienteEnderecoFormComponent } from "./pages/cliente-endereco-form/cliente-endereco-form.component";
import { ClienteEnderecoTableComponent } from "./pages/cliente-endereco-table/cliente-endereco-table.component";

const routes: Routes = [
    { path: "", component: ClienteEnderecoTableComponent },
    { path: "add", component: ClienteEnderecoFormComponent },
    { path: "edit/:id", component: ClienteEnderecoFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClienteEnderecoRoutingModule {}
