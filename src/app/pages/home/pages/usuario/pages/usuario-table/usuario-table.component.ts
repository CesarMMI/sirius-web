import { Component, Type } from "@angular/core";
import { MenuItem, MessageService } from "primeng/api";
import { Menu } from "primeng/menu";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { PhonePipe } from "src/app/shared/pipes/phone.pipe";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { IUsuario } from "../../models/usuario";
import { UsuarioService } from "../../services/usuario.service";
import { UsuarioAdvancedFilterComponent } from "../usuario-advanced-filter/usuario-advanced-filter.component";

@Component({
    templateUrl: "./usuario-table.component.html",
    styleUrls: ["./usuario-table.component.scss"],
})
export class UsuarioTableComponent extends TableComponent<IUsuario> {
    constructor(
        protected usuarioService: UsuarioService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            usuarioService.cols,
            "Usuário removido com sucesso!",
            usuarioService,
            filterService,
            paginationService,
            messageService
        );
    }

    protected filterOptions = [
        { field: "id", header: "ID" },
        { field: "nome", header: "Nome" },
        { field: "ultimoNome", header: "Sobrenome" },
        { field: "email", header: "Email" },
        { field: "celular", header: "Celular", pipe: PhonePipe },
    ];

    protected displayMudar: boolean = false;
    protected displayAdicionar: boolean = false;

    protected usuarioRotinas: MenuItem[] = this.genRotinasMenu(false);
    private genRotinasMenu(isSelected: boolean): MenuItem[] {
        return [
            {
                label: "Adicionar Usuário",
                icon: "bi bi-person-plus-fill",
                command: () => (this.displayAdicionar = true),
            },
            {
                disabled: !isSelected,
                label: "Mudar Grupo do Usuário",
                icon: "bi bi-people-fill",
                command: () => (this.displayMudar = true),
            },
        ];
    }

    protected rotinaSuccess() {
        this.displayMudar = false;
        this.displayAdicionar = false;

        this.onSelect(null);
        this.get();
    }

    override onSelect(event: IUsuario | null): void {
        this.usuarioRotinas = this.genRotinasMenu(event ? true : false);
        this.usuarioService.selectedUsuario$.next(event);
        super.onSelect(event);
    }

    advForm: Type<UsuarioAdvancedFilterComponent> =
        UsuarioAdvancedFilterComponent;
}
