import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConfiguracaoComponent } from "./configuracao.component";

const routes: Routes = [
    {
        path: "",
        component: ConfiguracaoComponent,
        children: [
            { path: "", redirectTo: "minha-conta", pathMatch: "full" },
            {
                path: "minha-conta",
                loadChildren: () =>
                    import("./pages/minha-conta/minha-conta.module").then(
                        (m) => m.MinhaContaModule
                    ),
            },
            {
                path: "grupos-usuarios",
                loadChildren: () =>
                    import("./pages/grupo-usuarios/grupo-usuarios.module").then(
                        (m) => m.GrupoUsuariosModule
                    ),
            },
            {
                path: "listas-precos",
                loadChildren: () =>
                    import("./pages/lista-precos/lista-precos.module").then(
                        (m) => m.ListaPrecosModule
                    ),
            },
            {
                path: "nfe-configs",
                loadChildren: () =>
                    import("./pages/nfe-config/nfe-config.module").then(
                        (m) => m.NfeConfigModule
                    ),
            },
            {
                path: "certificados",
                loadChildren: () =>
                    import("./pages/certificado/certificado.module").then(
                        (m) => m.CertificadoModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConfiguracaoRoutingModule {}
