import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { UsuarioFormEnderecoFormComponent } from "./pages/usuario-form-endereco-form/usuario-form-endereco-form.component";
import { UsuarioFormEnderecoTableComponent } from "./pages/usuario-form-endereco-table/usuario-form-endereco-table.component";
import { UsuarioFormEnderecoRoutingModule } from "./usuario-form-endereco-routing.module";

@NgModule({
  declarations: [
    UsuarioFormEnderecoTableComponent,
    UsuarioFormEnderecoFormComponent,
  ],
  imports: [CommonModule, UsuarioFormEnderecoRoutingModule],
})
export class UsuarioFormEnderecoModule {}
