import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CrudService } from 'src/app/shared/services/crud-service';
import { PaginationService } from 'src/app/shared/services/http-params/pagination.service';
import { environment } from 'src/environments/environment';

import { ICliente } from '../models/cliente';

@Injectable({
    providedIn: "root",
})
export class ClienteService extends CrudService<ICliente> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService,
        protected override message: MessageService
    ) {
        super(
            http,
            pagination,
            message,
            `http://${environment.api_host}:8080/datasnap/rest/TSMClientes`,
            {
                getAll: {
                  endPoint: "GetClientesList",
                  response: {
                    payload: "Clientes",
                    pageCount: "QuantidadePaginas"
                  }
                },
                getById: "GetClientesDetail",
                post: "Cliente",
                put: "Cliente",
                delete: "Cliente",
            }
        );
    }
}
