import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GrupoUsuariosFormComponent } from "./pages/grupo-usuarios-form/grupo-usuarios-form.component";
import { GrupoUsuariosTableComponent } from "./pages/grupo-usuarios-table/grupo-usuarios-table.component";

const routes: Routes = [
    { path: "", component: GrupoUsuariosTableComponent },
    { path: "add", component: GrupoUsuariosFormComponent },
    { path: "edit/:id", component: GrupoUsuariosFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GrupoUsuariosRoutingModule {}
