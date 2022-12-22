import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { CepPipe } from "src/app/shared/pipes/cep.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { NotaFiscalPagamentoService } from "../../services/nota-fiscal-pagamento.service";

@Component({
    templateUrl: "./nota-fiscal-pagamentos-table.component.html",
    styles: [],
})
export class NotaFiscalPagamentosTableComponent extends TableComponent<any> {
    constructor(
        protected notaFiscalPagamentoService: NotaFiscalPagamentoService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            notaFiscalPagamentoService.cols,
            "Pagamento removido com sucesso!",
            notaFiscalPagamentoService,
            filterService,
            paginationService,
            messageService
        );
    }
}
