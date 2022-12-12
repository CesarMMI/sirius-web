import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud-service';
import { FilterService } from 'src/app/shared/services/http-params/filter.service';
import { PaginationService } from 'src/app/shared/services/http-params/pagination.service';
import { environment } from 'src/environments/environment';
import { IListaPrecos } from '../models/lista-precos';

@Injectable({
  providedIn: 'root'
})
export class ListaPrecosService extends CrudService<IListaPrecos> {
  constructor(
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
          `http://${environment.api_host}:8081/datasnap/rest/TSMListaPreco`,
          {
              getAll: {
                  endPoint: "ListasPreco",
                  response: {
                      payload: "payload",
                      pageCount: "pageCount",
                  },
              },
              getById: "ListaPreco",
              post: "ListasPreco",
              put: "ListasPreco",
              delete: "ListasPreco",
          }
      );
  }

  selectedPedido = new BehaviorSubject<IListaPrecos | null>(null);
  getSelectedPedido() {
      return this.selectedPedido.asObservable();
  }
}
