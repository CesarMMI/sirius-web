import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { combineLatest, Subscription } from "rxjs";
import { NotaFiscalService } from "src/app/pages/home/pages/nota-fiscal/services/nota-fiscal.service";
import { ProdutoService } from "src/app/pages/home/pages/produto/services/produto.service";
import { FormComponent } from "src/app/shared/components/models/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { NotaFiscalPagamentoService } from "../../services/nota-fiscal-pagamento.service";

@Component({
    templateUrl: "./nota-fiscal-pagamentos-form.component.html",
    styles: [],
})
export class NotaFiscalPagamentosFormComponent extends FormComponent<any> {
    constructor(
        formBuilder: FormBuilder,
        notaFiscalService: NotaFiscalService,
        private notaFiscalPagamentoService: NotaFiscalPagamentoService,
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
            `/home/notas-fiscais/edit/${notaFiscalService.selectedNota?.Id}/pagamentos`,
            notaFiscalPagamentoService,
            ["id"],
            formBuilder.group({
                id: [{ value: null, disabled: true }],
                indicacao: "",
                tipo: "",
                valor: null,
                dataCriacao: null,
                dataVencimento: null,
                nfId: notaFiscalService.selectedNota.Id,
            })
        );
    }
}
