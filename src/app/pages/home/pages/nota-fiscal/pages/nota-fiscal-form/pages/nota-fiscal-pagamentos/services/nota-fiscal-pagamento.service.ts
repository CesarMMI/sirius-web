import { CurrencyPipe, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ICol } from 'src/app/shared/components/custom-table/models/Col';
import { CepPipe } from 'src/app/shared/pipes/cep.pipe';
import { CrudService } from 'src/app/shared/services/crud-service';
import { FilterService } from 'src/app/shared/services/http-params/filter.service';
import { PaginationService } from 'src/app/shared/services/http-params/pagination.service';
import { environment } from 'src/environments/environment';
import { NotaFiscalService } from '../../../../../services/nota-fiscal.service';

@Injectable({
  providedIn: 'root'
})
export class NotaFiscalPagamentoService extends CrudService<any> {
  constructor(
      private notaFiscalService: NotaFiscalService,
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
          `http://${environment.api_host}:8082/datasnap/rest/TSMPagamentos`,
          {
              getAll: {
                  endPoint: `GetPagamentos/${notaFiscalService.selectedNota?.id}`,
                  response: {
                      payload: "pagamentos",
                      pageCount: "quantidadePaginas",
                  },
              },
              getById: "GetPagamento",
              post: "Pagamento",
              put: "Pagamento",
              delete: "Pagamento",
          }
      );
  }

  override cols: ICol[] = [
      { field: "id", header: "ID" },
      { field: "indicacao", header: "Indicação" },
      { field: "tipo", header: "Tipo" },
      { field: "dataVencimento", header: "Data de Vencimento", pipe: DatePipe },
      { field: "valor", header: "Valor", pipe: CurrencyPipe, pipeArgs: ["BRL"] },
  ];
}
