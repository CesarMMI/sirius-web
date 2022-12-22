import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import {
    Subscription,
    switchMap,
    iif,
    first,
    EMPTY,
    combineLatest,
} from "rxjs";
import { ClienteEnderecoService } from "src/app/pages/home/pages/cliente/pages/cliente-form/cliente-endereco/services/cliente-endereco.service";
import { ClienteService } from "src/app/pages/home/pages/cliente/services/cliente.service";
import { NotaFiscalService } from "src/app/pages/home/pages/nota-fiscal/services/nota-fiscal.service";
import { ProdutoService } from "src/app/pages/home/pages/produto/services/produto.service";
import { FormComponent } from "src/app/shared/components/models/form-component/form-component";
import { EnderecoService } from "src/app/shared/services/endereco.service";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { NotaFiscalItemService } from "../../services/nota-fiscal-item.service";

@Component({
    templateUrl: "./nota-fiscal-itens-form.component.html",
    styles: [],
})
export class NotaFiscalItensFormComponent extends FormComponent<any> {
    constructor(
        formBuilder: FormBuilder,
        notaFiscalService: NotaFiscalService,
        public produtoService: ProdutoService,
        private notaFiscalItemService: NotaFiscalItemService,
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
            `/home/notas-fiscais/edit/${notaFiscalService.selectedNota?.Id}/itens`,
            notaFiscalItemService,
            ["id"],
            formBuilder.group({
                Id: { value: null, disabled: true },
                NotafiscalId: {
                    value: notaFiscalService.selectedNota.Id,
                    disabled: true,
                },
                ProdutoId: null,
                Ncm: null,
                Cprod: null,
                Xprod: null,
                Qcom: null,
                Ucom: null,
                Vuncom: null,
                Qtrib: { value: null, disabled: true },
                Utrib: { value: null, disabled: true },
                Vuntrib: { value: null, disabled: true },
                VOutro: null,
                Cest: null,
                Cfop: null,
                Cean: null,
                VDesc: null,
                VFrete: null,
                Vprod: null,
                Orig: null,
                Csosn: null,
                Modbc: null,
                Vbc: null,
                Picms: null,
                Vicms: null,
                Modbcst: null,
                Vbcst: null,
                Picmsst: null,
                Vicmsst: null,
                pRedBCST: null,
                pMVAST: null,
                Pcredsn: null,
                Vcredicmssn: null,
                Vbcstret: null,
                Vicmsstret: null,
                Pst: null,
                CstPIS: null,
                VBCPIS: null,
                PPIS: null,
                QBCPISProd: null,
                VAliqPISProd: null,
                VPIS: null,
                CstCOFINS: null,
                VBCCOFINS: null,
                PCOFINS: null,
                QBCCOFINSProd: null,
                VAliqCOFINSProd: null,
                VCOFINS: null,
            })
        );

        this.valorSub = combineLatest([
            this.form.get("Qcom")!.valueChanges,
            this.form.get("Vuncom")!.valueChanges,
        ]).subscribe(([quantidade, valor]) => {
            let total =
                (valor +
                    this.form.get("VOutro")?.value -
                    this.form.get("VDesc")?.value) *
                quantidade;
            this.form.get("Vprod")?.setValue(total);
        });
    }

    private valorSub: Subscription;

    onChooseProduto(event: any) {
        this.form.patchValue({
            ProdutoId: event["id"],
            Ncm: event["NCM"],
            Cean: event["codEAN"],
            Cfop: event["CFOP"],
            Cprod: event["codProduto"],
            Xprod: event["descricao"],
            Qcom: event["qtdCom"],
            Qtrib: event["qtdTrib"],
            Ucom: event["unCom"],
            Utrib: event["unTrib"],
            Vuncom: event["vlrProd"],
            Vuntrib: event["vlrUnTrib"],
        });
    }

    calcTotal(type: "com" | "trib") {
        return (
            (this.form.get(`Vun${type}`)?.value +
                this.form.get("VOutro")?.value -
                this.form.get("VDesc")?.value) *
            this.form.get(`Q${type}`)?.value
        );
    }

    checkTotal() {
        const dif = this.calcTotal("com") - this.calcTotal("trib");
        
        if (dif > 0.1 || dif < -0.1) return false;
        return true;
    }

    override ngOnDestroy(): void {
        this.valorSub.unsubscribe(), super.ngOnDestroy();
    }

    override submit(submitObj?: any): void {
        if (this.checkTotal()) {
            super.submit();
        } else {
            this.messageService.add({
                severity: "warn",
                summary: "Valor total diferente",
                detail: "O valor total comercial está diferente do tributário. Verifique os campos de Quantidade e Valor Unitário",
            });
        }
    }
}
