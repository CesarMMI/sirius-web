import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/table-component/table-component";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { PhonePipe } from "src/app/shared/pipes/phone.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { IFornecedor } from "../../models/fornecedor";
import { FornecedorService } from "../../services/fornecedor.service";

@Component({
    templateUrl: "./fornecedor-table.component.html",
    styles: [],
})
export class FornecedorTableComponent extends TableComponent<IFornecedor> {
    constructor(
        fornecedorService: FornecedorService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            [
                { header: "ID", field: "id" },
                { header: "Fantasia", field: "fantasia" },
                { header: "Razão Social", field: "razaoSocial" },
                { header: "CPF/CNPJ", field: "cpfCnpj", pipe: CpfCnpjPipe },
                { header: "Email", field: "email" },
                { header: "Celular", field: "celular", pipe: PhonePipe },
            ],
            "Vendedor removido com sucesso!",
            fornecedorService,
            filterService,
            paginationService,
            messageService
        );
    }
}
