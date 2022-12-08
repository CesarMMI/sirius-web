import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { PedidoVendaService } from "src/app/pages/home/pages/pedido-venda/services/pedido-venda.service";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { PedidoVendaPagamentoService } from "../../services/pedido-venda-pagamento.service";

@Component({
    templateUrl: "./pedido-venda-pagamentos-form.component.html",
    styles: [],
})
export class PedidoVendaPagamentosFormComponent extends FormComponent<any> {
    constructor(
        formBuilder: FormBuilder,
        private pedidoVendaService: PedidoVendaService,
        private pedidoVendaPagamentoService: PedidoVendaPagamentoService,
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
            "Pagamento",
            `/home/pedidos-venda/edit/${pedidoVendaService.selectedPedido.value?.id}/pagamentos`,
            pedidoVendaPagamentoService,
            ["id", "dataCriacao"],
            formBuilder.group({
                id: { value: null, disabled: true },
                pedidoId: { value: null, disabled: true },
                formaPagamento: "01",
                valor: null,
                dataCriacao: { value: null, disabled: true },
                dataVencimento: null,
            })
        );
    }

    override submit(submitObj?: any): void {
        this.form
            .get("pedidoId")
            ?.patchValue(this.pedidoVendaService.selectedPedido.value?.id);
        super.submit();
    }
}
