import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { ProdutoFormComponent } from "./pages/produto-form/produto-form.component";
import { ProdutoTableComponent } from "./pages/produto-table/produto-table.component";
import { ProdutoRoutingModule } from "./produto-routing.module";

@NgModule({
  declarations: [ProdutoTableComponent, ProdutoFormComponent],
  imports: [CommonModule, ProdutoRoutingModule, CustomTableModule],
})
export class ProdutoModule {}
