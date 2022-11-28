import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { MessageService } from "primeng/api";
import { first, shareReplay, switchMap } from "rxjs";
import { TableComponent } from "src/app/shared/components/table-component/table-component";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { ClienteEnderecoService } from "../../services/cliente-endereco.service";

@Component({
    templateUrl: "./cliente-endereco-table.component.html",
    styles: [],
})
export class ClienteEnderecoTableComponent extends TableComponent<any> {
    constructor(
        activatedRoute: ActivatedRoute,
        protected clienteEnderecoService: ClienteEnderecoService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            [
                { field: "id", header: "ID" },
                { field: "nome", header: "Nome" },
                { field: "email", header: "Email" },
                { field: "celular", header: "Celular", pipe: CpfCnpjPipe },
                { field: "grupoNome", header: "Grupo" },
                { field: "status", header: "Status", pipe: StatusPipe },
            ],
            "Usuário removido com sucesso!",
            clienteEnderecoService,
            filterService,
            paginationService,
            messageService
        );
        // Get Cliente ID and set it on service
        clienteEnderecoService.setParentId(
            parseInt(
                activatedRoute.parent?.parent?.snapshot.paramMap.get("id") ||
                    "0"
            )
        );
    }
}
