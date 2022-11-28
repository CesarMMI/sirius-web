import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { debounceTime, EMPTY, first, iif, Subscription, switchMap } from "rxjs";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { EnderecoService } from "src/app/shared/services/endereco.service";
import { FormLockService } from "src/app/shared/services/form-lock.service";

import { IEmpresa } from "../../models/empresa";
import { EmpresaService } from "../../services/empresa.service";

@Component({
    templateUrl: "./empresa-form.component.html",
    styles: [],
})
export class EmpresaFormComponent extends FormComponent<IEmpresa> {
    private cepSub: Subscription | undefined;

    constructor(
        formBuilder: FormBuilder,
        private enderecoService: EnderecoService,
        private empresaService: EmpresaService,
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
            "Empresa",
            "/home/empresas",
            empresaService,
            ["id", "crt"],
            formBuilder.group({
                id: { value: null, disabled: true },
                cnpj: null,
                xrazaoSocial: null,
                status: ["A"],
                xfant: null,
                xlgr: null,
                nro: null,
                xcpl: [null],
                xbairro: null,
                cmun: null,
                xmun: null,
                uf: null,
                cep: null,
                fone: null,
                ie: null,
                crt: [{ value: "1", disabled: true }],
                token: null,
            })
        );
        this.cepSub = this.form
            .get("cep")
            ?.valueChanges.pipe(
                switchMap((cep) => {
                    return iif(
                        () =>
                            cep != null &&
                            cep.length === 8 &&
                            (this.form.get("cep")?.touched || false),
                        this.enderecoService.searchByCep(cep).pipe(first()),
                        EMPTY
                    );
                }),
            )
            .subscribe((response: any) =>
                this.form.patchValue({
                    xlgr: response["logradouro"],
                    xbairro: response["bairro"],
                    cmun: response["ibge"],
                    xmun: response["localidade"],
                    uf: response["uf"],
                })
            );
    }

    override ngOnDestroy(): void {
        this.cepSub?.unsubscribe();
        super.ngOnDestroy();
    }
}
