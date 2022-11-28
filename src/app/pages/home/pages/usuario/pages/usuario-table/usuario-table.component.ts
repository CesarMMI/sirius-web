import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/table-component/table-component";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { IUsuario } from "../../models/usuario";
import { UsuarioService } from "../../services/usuario.service";

@Component({
    templateUrl: "./usuario-table.component.html",
    styles: [],
})
export class UsuarioTableComponent extends TableComponent<IUsuario> {
    constructor(
        usuarioService: UsuarioService,
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
            usuarioService,
            filterService,
            paginationService,
            messageService
        );
    }
}
