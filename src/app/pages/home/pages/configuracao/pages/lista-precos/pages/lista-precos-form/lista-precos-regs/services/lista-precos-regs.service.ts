import { CurrencyPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { BehaviorSubject } from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";
import { ListaPrecosService } from "../../../../services/lista-precos.service";

@Injectable({
    providedIn: "root",
})
export class ListaPrecosRegsService extends CrudService<any> {
    constructor(
        listaPrecosService: ListaPrecosService,
        protected override http: HttpClient,
        protected override pagination: PaginationService,
        protected override filter: FilterService,
        protected override message: MessageService
    ) {
        super(
            http,
            pagination,
            filter,
            message,
            `http://${environment.api_host}:8081/datasnap/rest/TSMListaXProduto`,
            {
                getAll: {
                    endPoint: `RegistrosLista/${listaPrecosService.selectedListaId}`,
                    response: {
                        payload: "payload",
                        pageCount: "pageCount",
                    },
                },
                getById: "RegistroLista",
                post: "RegistroLista",
                put: "RegistroLista",
                delete: "RegistroLista",
            }
        );
    }

    override cols: ICol[] = [
        {
            header: "ID",
            field: "id",
        },
        {
            header: "Produto ID",
            field: "produtoId",
        },
        {
            header: "Produto",
            field: "produtoDesc",
        },
        {
            header: "Valor",
            field: "valor",
            pipe: CurrencyPipe,
        },
    ];
}
