import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotaFiscalFormComponent } from "./pages/nota-fiscal-form/nota-fiscal-form.component";
import { NotaFiscalTableComponent } from "./pages/nota-fiscal-table/nota-fiscal-table.component";

const routes: Routes = [
    { path: "", component: NotaFiscalTableComponent },
    {
        path: "add",
        loadChildren: () =>
            import("./pages/nota-fiscal-form/nota-fiscal-form.module").then(
                (m) => m.NotaFiscalFormModule
            ),
    },
    {
        path: "edit/:id",
        loadChildren: () =>
            import("./pages/nota-fiscal-form/nota-fiscal-form.module").then(
                (m) => m.NotaFiscalFormModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotaFiscalRoutingModule {}
