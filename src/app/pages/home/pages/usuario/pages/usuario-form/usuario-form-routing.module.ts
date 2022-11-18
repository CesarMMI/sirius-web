import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UsuarioFormGeralComponent } from "./pages/usuario-form-geral/usuario-form-geral.component";
import { UsuarioFormComponent } from "./usuario-form.component";

const routes: Routes = [
  {
    path: "",
    component: UsuarioFormComponent,
    children: [
      { path: "", redirectTo: "geral", pathMatch: "full" },
      { path: "geral", component: UsuarioFormGeralComponent },
      {
        path: "enderecos",
        loadChildren: () =>
          import(
            "./pages/usuario-form-endereco/usuario-form-endereco.module"
          ).then((m) => m.UsuarioFormEnderecoModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioFormRoutingModule {}
