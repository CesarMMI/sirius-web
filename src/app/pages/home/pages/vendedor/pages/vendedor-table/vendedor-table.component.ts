import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/table-component/table-component";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { PhonePipe } from "src/app/shared/pipes/phone.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { IVendedor } from "../../models/vendedor";
import { VendedorService } from "../../services/vendedor.service";

@Component({
    templateUrl: "./vendedor-table.component.html",
    styles: [],
})
export class VendedorTableComponent extends TableComponent<IVendedor> {
    constructor(
        vendedorService: VendedorService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            [
                { header: "ID", field: "id" },
                { header: "Nome", field: "nome" },
                { header: "Apelido", field: "apelido" },
                { header: "CNPJ", field: "cnpj", pipe: CpfCnpjPipe },
                { header: "CPF", field: "cpf", pipe: CpfCnpjPipe },
                { header: "Telefone", field: "telefone", pipe: PhonePipe },
                { header: "Email", field: "email" },
            ],
            "Vendedor removido com sucesso!",
            vendedorService,
            filterService,
            paginationService,
            messageService
        );
    }
}
