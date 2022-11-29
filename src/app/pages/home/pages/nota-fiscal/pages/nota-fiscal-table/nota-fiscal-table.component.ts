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
                { field: "Id", header: "ID" },
                { field: "Serie", header: "Série" },
                { field: "Chave", header: "Chave" },
                { field: "Dhemi", header: "Data/Hora da Emissão" },
                { field: "Destxnome", header: "Cliente" },
                { field: "Destcnpjcpf", header: "CPF/CNPJ" },
                { field: "Enderdestxmun", header: "Município" },
                { field: "Enderdestuf", header: "UF" },
                { field: "Status", header: "Status" },
            ],
            "Nota fiscal removida com sucesso!",
            notaFiscalService,
            filterService,
            paginationService,
            messageService
        );
    }
}
