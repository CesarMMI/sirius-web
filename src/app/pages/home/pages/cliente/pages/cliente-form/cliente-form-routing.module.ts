import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteFormGeralComponent } from "./cliente-form-geral/cliente-form-geral.component";
import { ClienteFormComponent } from "./cliente-form.component";

const routes: Routes = [
    {
        path: "",
        component: ClienteFormComponent,
        children: [
            { path: "", redirectTo: "geral", pathMatch: "full" },
            { path: "geral", component: ClienteFormGeralComponent },
            {
                path: "enderecos",
                loadChildren: () =>
                    import(
                        "./cliente-endereco/cliente-endereco.module"
                    ).then((m) => m.ClienteEnderecoModule),
            },
            {
                path: "precos",
                loadChildren: () =>
                    import(
                        "./cliente-preco/cliente-preco.module"
                    ).then((m) => m.ClientePrecoModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClienteFormRoutingModule {}
