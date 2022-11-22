import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { PaginationService } from "src/app/shared/services/pagination.service";
import { environment } from "src/environments/environment";
import { IProduto } from "../models/Produto";

@Injectable({
    providedIn: "root",
})
export class ProdutoService extends CrudService<IProduto> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService
    ) {
        super(
            http,
            pagination,
            `http://${environment.api_host}:8081/datasnap/rest/TSMProdutos`,
            {
                getAll: {
                  endPoint: "GetProdutos",
                  response: {
                    payload: "Produtos",
                    pageCount: "QuantidadePaginas" 
                  }
                },
                getById: "GetProdutoDetail",
                post: "Produto",
                put: "Produto",
                delete: "Produto",
            }
        );
    }

    public override get(
        page: number,
        quantityPerPage: number
    ): Observable<ITableData<IProduto>> {
        return super.get(page, quantityPerPage).pipe(
            map((response: any) => {
                return {
                    data: response["Produtos"],
                    pageTotal: response["QuantidadePaginas"],
                };
            })
        );
    }
}
