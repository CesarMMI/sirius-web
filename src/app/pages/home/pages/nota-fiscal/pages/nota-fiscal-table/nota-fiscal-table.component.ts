import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/table-component/table-component";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { NotaFiscalService } from "../../services/nota-fiscal.service";

@Component({
    templateUrl: "./nota-fiscal-table.component.html",
    styles: [],
})
export class NotaFiscalTableComponent extends TableComponent<any> {
    constructor(
        notaFiscalService: NotaFiscalService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            [
                { field: "id", header: "ID" },
                { field: "serie", header: "Série" },
                { field: "chave", header: "Chave" },
                {
                    field: "dhemi",
                    header: "Data/Hora da Emissão",
                    pipe: DatePipe,
                    pipeArgs: ["short"],
                },
                { field: "destxnome", header: "Cliente" },
                { field: "destcnpjcpf", header: "CPF/CNPJ", pipe: CpfCnpjPipe },
                { field: "enderdestxmun", header: "Município" },
                { field: "enderdestuf", header: "UF" },
                { field: "status", header: "Status" },
            ],
            "Nota fiscal removida com sucesso!",
            notaFiscalService,
            filterService,
            paginationService,
            messageService
        );
    }
}
