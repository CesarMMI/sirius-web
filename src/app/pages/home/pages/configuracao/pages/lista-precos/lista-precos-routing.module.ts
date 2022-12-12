import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListaPrecosTableComponent } from "./pages/lista-precos-table/lista-precos-table.component";

const routes: Routes = [
    { path: "", component: ListaPrecosTableComponent },
    {
        path: "add",
        loadChildren: () =>
            import("./pages/lista-precos-form/lista-precos-form.module").then(
                (m) => m.ListaPrecosFormModule
            ),
    },
    {
        path: "edit/:id",
        loadChildren: () =>
            import("./pages/lista-precos-form/lista-precos-form.module").then(
                (m) => m.ListaPrecosFormModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListaPrecosRoutingModule {}
