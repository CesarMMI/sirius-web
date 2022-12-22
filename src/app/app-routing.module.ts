import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserTokenGuard } from "src/app/shared/guards/user-token.guard";

const routes: Routes = [
    { path: "", redirectTo: "auth", pathMatch: "full" },
    {
        path: "auth",
        loadChildren: () =>
            import("./pages/auth/auth.module").then((m) => m.AuthModule),
    },
    {
        path: "home",
        loadChildren: () =>
            import("./pages/home/home.module").then((m) => m.HomeModule),
        canActivate: [UserTokenGuard],
    },
    { path: 'cliente-preco', loadChildren: () => import('./pages/home/pages/cliente/pages/cliente-form/cliente-preco/cliente-preco.module').then(m => m.ClientePrecoModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
