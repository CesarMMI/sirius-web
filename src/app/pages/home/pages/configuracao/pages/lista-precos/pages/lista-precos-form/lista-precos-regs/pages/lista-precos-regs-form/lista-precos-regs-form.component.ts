import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { MessageService } from "primeng/api";
import { first } from "rxjs";
import { ProdutoService } from "src/app/pages/home/pages/produto/services/produto.service";
import { FormComponent } from "src/app/shared/components/models/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { ListaPrecosService } from "../../../../../services/lista-precos.service";
import { ListaPrecosRegsService } from "../../services/lista-precos-regs.service";

@Component({
    templateUrl: "./lista-precos-regs-form.component.html",
    styles: [],
})
export class ListaPrecosRegsFormComponent extends FormComponent<any> {
    constructor(
        formBuilder: FormBuilder,
        listaPrecosService: ListaPrecosService,
        protected produtoService: ProdutoService,
        private listaPrecosRegsService: ListaPrecosRegsService,
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
            "Registro",
            `/home/configuracoes/listas-precos/edit/${listaPrecosService.selectedListaId}`,
            listaPrecosRegsService,
            ["id"],
            formBuilder.group({
                id: { value: null, disabled: true },
                listaId: {
                    value: listaPrecosService.selectedListaId,
                    disabled: true,
                },
                produtoId: null,
                produtoDesc: null,
                valor: [null, [Validators.required]],
            })
        );
    }

    override ngOnInit(): void {
        this.activatedRoute.paramMap
            .pipe(first())
            .subscribe((paramMap: ParamMap) => {
                if (paramMap.has("idReg")) {
                    const id = parseInt(paramMap.get("idReg") || "0");
                    this.listaPrecosRegsService
                        .getById(id)
                        .pipe(first())
                        .subscribe({
                            next: (response) =>{
                                this.form.patchValue(response)
                            }
                        });
                }
            });
        super.ngOnInit(false);
    }

    onChooseProduto(event: any) {
        console.log(event);
        this.form.get("produtoDesc")!.setValue(event["descricao"]);
        this.form.get("valor")!.setValue(event["vlrProd"]);
    }
}
