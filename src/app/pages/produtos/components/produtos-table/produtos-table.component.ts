import { Component, OnInit } from "@angular/core";
import { first } from "rxjs";
import { IProduto } from "src/app/pages/produtos/models/produto";
import { ProdutoService } from "src/app/pages/produtos/services/produto.service";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";

@Component({
  selector: "app-produtos-table",
  template: ` <app-table [cols]="cols" [data]="produtos" ></app-table> `,
  styles: [],
})
export class ProdutosTableComponent {
  protected produtos: ITableData = { data: [], totalPages: 0 };
  protected total: number = 0;

  protected cols: ICol[] = [
    {
      header: "ID",
      field: "id",
    },
    {
      header: "Cód. Interno",
      field: "codProduto",
    },
    {
      header: "Descrição",
      field: "descricao",
    },
    {
      header: "Valor",
      field: "vlrProd",
    },
    {
      header: "Saldo",
      field: "saldo",
    },
    {
      header: "EAN",
      field: "codEAN",
    },
    {
      header: "NCM",
      field: "NCM",
    },
    {
      header: "CFOP",
      field: "CFOP",
    },
  ];

  constructor(private produtoService: ProdutoService) {
    this.get(1);
  }

  get(page: number): void {
    this.produtoService
      .get(page)
      .pipe(first())
      .subscribe({
        next: (response: ITableData) => (this.produtos = response),
      });
  }
}
