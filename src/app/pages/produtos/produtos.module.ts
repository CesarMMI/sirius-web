import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProdutoService } from "src/app/pages/produtos/services/produto.service";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";
import { TokenInterceptor } from "src/app/shared/services/token.interceptor";
import { UserTokenInterceptor } from "src/app/shared/services/user-token.interceptor";

import { ProdutoFormComponent } from "./components/produto-form/produto-form.component";
import { ProdutosTableComponent } from "./components/produtos-table/produtos-table.component";
import { ProdutosRoutingModule } from "./produtos-routing.module";

@NgModule({
  declarations: [ProdutosTableComponent, ProdutoFormComponent],
  imports: [CommonModule, ProdutosRoutingModule, CustomTableModule],
  providers: [
    ProdutoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class ProdutosModule {}
