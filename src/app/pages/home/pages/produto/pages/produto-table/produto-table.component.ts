import { CurrencyPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProdutoService } from "src/app/pages/home/pages/produto/services/produto.service";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";

@Component({
  templateUrl: "./produto-table.component.html",
  styles: [],
})
export class ProdutoTableComponent {
  protected produtos$: Observable<ITableData>;
  protected cols: ICol[] = [
    { field: "id", header: "ID" },
    { field: "codProduto", header: "codProduto" },
    { field: "vlrProd", header: "Valor", pipe: CurrencyPipe },
    { field: "unCom", header: "Unidade" },
    { field: "saldo", header: "Saldo" },
    { field: "status", header: "Status" },
  ];

  constructor(private produtoService: ProdutoService) {
    this.produtos$ = produtoService.getAll(1, 10);
  }
}
