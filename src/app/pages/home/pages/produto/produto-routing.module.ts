import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutoFormComponent } from "src/app/pages/home/pages/produto/pages/produto-form/produto-form.component";
import { ProdutoTableComponent } from "src/app/pages/home/pages/produto/pages/produto-table/produto-table.component";

const routes: Routes = [
  { path: "", component: ProdutoTableComponent },
  { path: "add", component: ProdutoFormComponent },
  { path: "edit/:id", component: ProdutoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
