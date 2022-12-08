import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/table-component/table-component";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { GrupoUsuariosService } from "../../services/grupo-usuarios.service";

@Component({
    templateUrl: "./grupo-usuarios-table.component.html",
    styles: [],
})
export class GrupoUsuariosTableComponent extends TableComponent<any> {
    constructor(
        grupoUsuariosService: GrupoUsuariosService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            grupoUsuariosService.cols,
            "grupoUsuario removido com sucesso!",
            grupoUsuariosService,
            filterService,
            paginationService,
            messageService
        );
    }
}
