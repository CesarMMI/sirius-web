import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { combineLatest, Subscription } from "rxjs";
import { PedidoVendaService } from "src/app/pages/home/pages/pedido-venda/services/pedido-venda.service";

import { ProdutoService } from "src/app/pages/home/pages/produto/services/produto.service";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { PedidoVendaItemService } from "../../services/pedido-venda-item.service";

@Component({
    templateUrl: "./pedido-venda-itens-form.component.html",
    styles: [],
})
export class PedidoVendaItensFormComponent extends FormComponent<any> {
    constructor(
        formBuilder: FormBuilder,
        pedidoVendaService: PedidoVendaService,
        public produtoService: ProdutoService,
        private pedidoVendaItemService: PedidoVendaItemService,
        protected override router: Router,
        protected override messageService: MessageService,
        protected override activatedRoute: ActivatedRoute,
        protected override formLockService: FormLockService
    ) {
        super(
            router,
            messageService,
            activatedRoute,
            formLockService,
            "Item",
            `/home/pedidos-venda/edit/${pedidoVendaService.selectedPedido.value?.id}/itens`,
            pedidoVendaItemService,
            ["id"],
            formBuilder.group({
                id: { value: null, disabled: true },
                pedidoId: {
                    value: pedidoVendaService.selectedPedido.value?.id,
                    disabled: true,
                },
                produtoId: null,
                unidade: "",
                valorUnitario: null,
                quantidade: 1,
                valorTotal: { value: null, disabled: true },
                observacoes: "",
            })
        );
        this.valorSub.push(
            this.form
                .get("valorUnitario")!
                .valueChanges.subscribe((valorUnitario) => {
                    this.form
                        .get("valorTotal")
                        ?.patchValue(
                            valorUnitario *
                                parseFloat(
                                    this.form.get("quantidade")?.value || "0"
                                )
                        );
                }),
            this.form
                .get("quantidade")!
                .valueChanges.subscribe((quantidade) => {
                    this.form
                        .get("valorTotal")
                        ?.patchValue(
                            parseFloat(
                                this.form.get("valorUnitario")?.value || "0"
                            ) * quantidade
                        );
                })
        );
    }

    private valorSub: Subscription[] = [];

    onChooseProduto(event: any) {
        this.form.patchValue({
            produtoId: event["id"],
            unidade: event["unCom"],
            valorUnitario: event["vlrUnCom"],
        });
    }

    override ngOnDestroy(): void {
        for (const sub of this.valorSub) {
            sub.unsubscribe();
        }
        super.ngOnDestroy();
    }
}
