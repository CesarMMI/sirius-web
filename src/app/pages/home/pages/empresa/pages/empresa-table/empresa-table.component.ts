import { Component, Type } from "@angular/core";
import { MessageService } from "primeng/api";
import { IEmpresa } from "src/app/pages/home/pages/empresa/models/empresa";
import { EmpresaService } from "src/app/pages/home/pages/empresa/services/empresa.service";
import { AdvancedFilterForm } from "src/app/shared/components/advanced-filter-form/advanced-filter-form";
import { TableComponent } from "src/app/shared/components/table-component/table-component";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { TokensService } from "src/app/shared/services/tokens.service";

import { EmpresaAdvancedFilterComponent } from "../empresa-advanced-filter/empresa-advanced-filter.component";

@Component({
    templateUrl: "./empresa-table.component.html",
})
export class EmpresaTableComponent extends TableComponent<IEmpresa> {
    empresaAdvancedFilterComponent: Type<AdvancedFilterForm> =
        EmpresaAdvancedFilterComponent;

    constructor(
        protected empresaService: EmpresaService,
        protected tokensService: TokensService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            [
                { field: "id", header: "ID" },
                { field: "cnpj", header: "CNPJ", pipe: CpfCnpjPipe },
                { field: "xrazaoSocial", header: "Razão Social" },
                { field: "xfant", header: "Fantasia" },
                { field: "grupoUsuario", header: "Grupo" },
                { field: "status", header: "Status", pipe: StatusPipe },
            ],
            "Empresa inativada com sucesso!",
            empresaService,
            filterService,
            paginationService,
            messageService
        );
    }

    protected onChoose(event: IEmpresa) {
        this.empresaService.chosenEmpresa$.next(event);
        this.tokensService.token = event.token;
        this.empresaService.selectEmpresa(event.id);
    }
}
