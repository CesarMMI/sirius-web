import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { IProduto } from "src/app/pages/home/pages/produto/models/Produto";
import { ProdutoService } from "src/app/pages/home/pages/produto/services/produto.service";
import { FormComponent } from "src/app/shared/components/models/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";

@Component({
    templateUrl: "./produto-form.component.html",
    styles: [],
})
export class ProdutoFormComponent extends FormComponent<IProduto> {
    constructor(
        formBuilder: FormBuilder,
        private produtoService: ProdutoService,
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
            "Produto",
            "/home/produtos",
            produtoService,
            ["id", "saldo"],
            formBuilder.group({
                id: { value: null, disabled: true },
                codProduto: null,
                descricao: [null, [Validators.required]],
                codEAN: [
                    null,
                    [Validators.minLength(8), Validators.maxLength(14)],
                ],
                NCM: [null, [Validators.maxLength(8)]],
                CFOP: null,
                unCom: null,
                qtdCom: null,
                vlrUnCom: null,
                vlrProd: null,
                codEANTrib: null,
                unTrib: null,
                qtdTrib: null,
                vlrUnTrib: null,
                saldo: [{ value: 0, disabled: true }],
                status: ["A"],
            })
        );
    }

    override submit(submitObj?: Object | IProduto | undefined): void {
        super.submit(this.genProdutoObj());
    }

    private genProdutoObj() {
        alert("genProdutoObj");
        return <IProduto>{
            // Total
            ...this.form.getRawValue(),
            vlrProd: this.form.get("vlrUnCom")?.value * 1,
            // Tibutário
            unTrib: this.form.get("unCom")?.value,
            qtdTrib: 1,
            vlrUnTrib: this.form.get("vlrUnCom")?.value,
            // Comercial
            unCom: this.form.get("unCom")?.value,
            qtdCom: 1,
            vlrUnCom: this.form.get("vlrUnCom")?.value,
            codEANTrib: this.form.get("codEAN")?.value,
        };
    }
}
