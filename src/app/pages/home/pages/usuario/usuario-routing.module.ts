import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UsuarioFormComponent } from "./pages/usuario-form/usuario-form.component";
import { UsuarioTableComponent } from "./pages/usuario-table/usuario-table.component";

const routes: Routes = [
    { path: "", component: UsuarioTableComponent },
    { path: "add", component: UsuarioFormComponent },
    { path: "edit/:id", component: UsuarioFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsuarioRoutingModule {}
