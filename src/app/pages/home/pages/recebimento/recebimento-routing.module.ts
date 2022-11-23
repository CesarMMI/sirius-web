import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecebimentoFormComponent } from "./pages/recebimento-form/recebimento-form.component";
import { RecebimentoTableComponent } from "./pages/recebimento-table/recebimento-table.component";

const routes: Routes = [
    { path: "", component: RecebimentoTableComponent },
    { path: "add", component: RecebimentoFormComponent },
    { path: "edit/:id", component: RecebimentoFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecebimentoRoutingModule {}
