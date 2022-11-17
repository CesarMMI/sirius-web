import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TokenGuard } from "src/app/shared/guards/token.guard";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "empresas", pathMatch: "full" },
      {
        path: "empresas",
        loadChildren: () =>
          import("./pages/empresa/empresa.module").then((m) => m.EmpresaModule),
      },
      {
        path: "produtos",
        loadChildren: () =>
          import("./pages/produto/produto.module").then((m) => m.ProdutoModule),
        canActivate: [TokenGuard],
      },
      {
        path: "pedidos-venda",
        loadChildren: () =>
          import("./pages/pedido-venda/pedido-venda.module").then(
            (m) => m.PedidoVendaModule
          ),
        canActivate: [TokenGuard],
      },
      {
        path: "clientes",
        loadChildren: () =>
          import("./pages/cliente/cliente.module").then((m) => m.ClienteModule),
        canActivate: [TokenGuard],
      },
      {
        path: "usuarios",
        loadChildren: () =>
          import("./pages/usuario/usuario.module").then((m) => m.UsuarioModule),
        canActivate: [TokenGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
