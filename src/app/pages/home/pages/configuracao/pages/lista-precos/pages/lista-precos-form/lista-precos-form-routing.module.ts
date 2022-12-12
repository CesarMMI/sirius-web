import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaPrecosFormComponent } from "./lista-precos-form.component";

const routes: Routes = [
    {
        path: "",
        component: ListaPrecosFormComponent,
        children: [
            {
                path: "",
                loadChildren: () =>
                    import("./lista-precos-regs/lista-precos-regs.module").then(
                        (m) => m.ListaPrecosRegsModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListaPrecosFormRoutingModule {}
