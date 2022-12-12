import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableComponent } from 'src/app/shared/components/table-component/table-component';
import { CpfCnpjPipe } from 'src/app/shared/pipes/cpf-cnpj.pipe';
import { FilterService } from 'src/app/shared/services/http-params/filter.service';
import { PaginationService } from 'src/app/shared/services/http-params/pagination.service';

import { ICliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

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
            [
                { header: "ID", field: "id" },
                { header: "Tipo", field: "tipoCliente" },
                { header: "Razão Social", field: "razaoSocial" },
                { header: "Fantasia", field: "fantasia" },
                { header: "CPF/CNPJ", field: "cpfCnpj", pipe: CpfCnpjPipe },
                { header: "Ultima Atualização", field: "dataUltimaAtualizacao", pipe: DatePipe, pipeArgs: ["dd/MM/yy"] },
            ],
            "Cliente removido com sucesso!",
            clienteService,
            filterService,
            paginationService,
            messageService
        );
    }

    override onSelect(event: ICliente | null): void {
        this.clienteService.selectedCliente = event;
        super.onSelect(event)
    }
}
