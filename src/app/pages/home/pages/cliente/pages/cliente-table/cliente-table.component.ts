import { DatePipe } from "@angular/common";
import { Component, Type } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { ICliente } from "../../models/cliente";
import { ClienteService } from "../../services/cliente.service";
import { ClienteAdvancedFilterComponent } from "../cliente-advanced-filter/cliente-advanced-filter.component";

@Component({
    templateUrl: "./cliente-table.component.html",
    styles: [],
})
export class ClienteTableComponent extends TableComponent<ICliente> {
    constructor(
        protected clienteService: ClienteService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            clienteService.cols,
            "Cliente removido com sucesso!",
            clienteService,
            filterService,
            paginationService,
            messageService
        );
    }

    advForm: Type<ClienteAdvancedFilterComponent> =
        ClienteAdvancedFilterComponent;

    override onSelect(event: ICliente | null): void {
        this.clienteService.selectedCliente = event;
        super.onSelect(event);
    }
}
