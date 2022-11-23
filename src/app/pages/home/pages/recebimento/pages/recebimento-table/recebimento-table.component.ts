import { CurrencyPipe, DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { IPageEvent } from "src/app/shared/components/custom-table/models/PageEvent";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";

import { RecebimentoService } from "../../services/recebimento.service";

@Component({
    templateUrl: "./recebimento-table.component.html",
    styles: [],
})
export class RecebimentoTableComponent {
    protected tableData$: Observable<ITableData<any>>;
    protected selectedRecebimento?: any;

    protected pageTotal: number = 0;
    protected cols: ICol[] = [
        { header: "ID", field: "id" },
        { header: "Status", field: "status", pipe: StatusPipe},
        { header: "Forma de Pagamento", field: "formaPagamento" },
        { header: "Valor Bruto", field: "valorBruto", pipe: CurrencyPipe },
        {
            header: "Data de Vencimento",
            field: "dataVencimento",
            pipe: DatePipe,
            pipeArgs: ["dd/MM/yy"],
        },
    ];

    constructor(private recebimentoService: RecebimentoService) {
        this.tableData$ = this.get(1, 10);
    }

    protected onPagination(event: IPageEvent) {
        this.tableData$ = this.get(event.page + 1, event.rows);
    }

    private get(
        page: number,
        quantityPerPage: number
    ): Observable<ITableData<any>> {
        return this.recebimentoService.get(page, quantityPerPage);
    }
}
