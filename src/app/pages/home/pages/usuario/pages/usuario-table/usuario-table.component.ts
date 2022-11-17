import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { IPageEvent } from "src/app/shared/components/custom-table/models/PageEvent";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { TokensService } from "src/app/shared/services/tokens.service";
import { IUsuario } from "../../models/usuario";

import { UsuarioService } from "../../services/usuario.service";

@Component({
  templateUrl: "./usuario-table.component.html",
  styles: [],
})
export class UsuarioTableComponent {
  protected tableData$: Observable<ITableData<IUsuario>>;
  protected selectedUsuario?: IUsuario;

  protected pageTotal: number = 0;
  protected cols: ICol[] = [
    { field: "id", header: "ID" },
    { field: "nome", header: "Nome" },
    { field: "email", header: "Email" },
    { field: "celular", header: "Celular", pipe: CpfCnpjPipe },
    { field: "grupoNome", header: "Grupo" },
    { field: "status", header: "Status", pipe: StatusPipe },
  ];

  constructor(
    private usuarioService: UsuarioService,
  ) {
    this.tableData$ = this.get(1, 10);
  }

  protected onPagination(event: IPageEvent) {
    this.tableData$ = this.get(event.page + 1, event.rows);
  }

  private get(
    page: number,
    quantityPerPage: number
  ): Observable<ITableData<IUsuario>> {
    return this.usuarioService.get(page, quantityPerPage);
  }
}
