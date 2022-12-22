import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableComponent } from 'src/app/shared/components/models/table-component/table-component';
import { StatusPipe } from 'src/app/shared/pipes/status.pipe';
import { FilterService } from 'src/app/shared/services/http-params/filter.service';
import { PaginationService } from 'src/app/shared/services/http-params/pagination.service';

import { RecebimentoService } from '../../services/recebimento.service';

@Component({
    templateUrl: "./recebimento-table.component.html",
    styles: [],
})
export class RecebimentoTableComponent extends TableComponent<any> {
    constructor(
        recebimentoService: RecebimentoService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            [
                { header: "ID", field: "id" },
                { header: "Status", field: "status", pipe: StatusPipe},
                { header: "Forma de Pagamento", field: "formaPagamento" },
                { header: "Valor Bruto", field: "valorBruto", pipe: CurrencyPipe },
                { header: "Data de Vencimento", field: "dataVencimento", pipe: DatePipe, pipeArgs: ["dd/MM/yy"] }
            ],
            "Recebimento removido com sucesso!",
            recebimentoService,
            filterService,
            paginationService,
            messageService
        );
    }
}