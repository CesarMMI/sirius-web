import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutosTableComponent } from "src/app/pages/produtos/components/produtos-table/produtos-table.component";

const routes: Routes = [{ path: "", component: ProdutosTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
