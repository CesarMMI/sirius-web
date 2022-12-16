import { CurrencyPipe, DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { MenuItem, MessageService } from "primeng/api";
import { first } from "rxjs";
import { IPedidoVenda } from "src/app/pages/home/pages/pedido-venda/models/PedidoVenda";
import { PedidoVendaService } from "src/app/pages/home/pages/pedido-venda/services/pedido-venda.service";
import { TableComponent } from "src/app/shared/components/table-component/table-component";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { UserInfoService } from "src/app/shared/services/user-info/user-info.service";

@Component({
    templateUrl: "./pedido-venda-table.component.html",
    styles: [],
})
export class PedidoVendaTableComponent extends TableComponent<IPedidoVenda> {
    constructor(
        protected userInfoService: UserInfoService,
        protected pedidoVendaService: PedidoVendaService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            [
                { field: "id", header: "ID" },
                {
                    field: "dataCriacao",
                    header: "Data de Criação",
                    pipe: DatePipe,
                    pipeArgs: ["dd/MM/yyyy"],
                },
                { field: "numero", header: "Número" },
                {
                    field: "valorBruto",
                    header: "Valor Bruto",
                    pipe: CurrencyPipe,
                    pipeArgs: ["BRL"],
                },
                {
                    field: "desconto",
                    header: "Desconto",
                    pipe: CurrencyPipe,
                    pipeArgs: ["BRL"],
                },
                {
                    field: "valorLiquido",
                    header: "Valor Líquido",
                    pipe: CurrencyPipe,
                    pipeArgs: ["BRL"],
                },
                { field: "status", header: "Status", pipe: StatusPipe },
            ],
            "Pedido de venda removido com sucesso!",
            pedidoVendaService,
            filterService,
            paginationService,
            messageService
        );
        this.rotinas = this.genMenuItems();
    }

    override onSelect(event: IPedidoVenda | null): void {
        this.pedidoVendaService.selectedPedido.next(event ? event : null);
        this.rotinas = this.genMenuItems(event != null);
        super.onSelect(event);
    }

    protected rotinas: MenuItem[] = [];
    private genMenuItems(selected: boolean = false): MenuItem[] {
        return [
            {
                disabled: !selected,
                icon: "pi pi-send",
                label: "Realizar Pedido",
                command: () => this.enviarPedido(),
            },
        ];
    }

    protected enviarPedido() {
        let status =
            this.userInfoService.userInfoValue!.vendedorId > 0
                ? "Confirmado"
                : "Realizado";

        this.pedidoVendaService.changeStatus(this.selectedData!.id, status)
        .pipe(first()).subscribe(() => {
            this.messageService.add({
                severity: "success",
                summary: "Pedido " + status + " com sucesso!"
            })
            this.get()
        })
    }
}
