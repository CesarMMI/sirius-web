import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ClienteFormComponent } from "./pages/cliente-form/cliente-form.component";
import { ClienteTableComponent } from "./pages/cliente-table/cliente-table.component";

const routes: Routes = [
    { path: "", component: ClienteTableComponent },
    {
        path: "add",
        loadChildren: () =>
            import("./pages/cliente-form/cliente-form.module").then(
                (m) => m.ClienteFormModule
            ),
    },
    {
        path: "edit/:id",
        loadChildren: () =>
            import("./pages/cliente-form/cliente-form.module").then(
                (m) => m.ClienteFormModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClienteRoutingModule {}
