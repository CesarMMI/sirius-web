import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import {
    debounceTime,
    EMPTY,
    first,
    iif,
    Subscription,
    switchMap,
    take,
} from "rxjs";
import { ResponsiveComponent } from "src/app/shared/components/responsive-component/responsive-component";
import { EnderecoService } from "src/app/shared/services/endereco.service";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { ResponsiveService } from "src/app/shared/services/responsive.service";

import { EmpresaService } from "../../services/empresa.service";

@Component({
    templateUrl: "./empresa-form.component.html",
    styles: [],
})
export class EmpresaFormComponent
    extends ResponsiveComponent
    implements OnDestroy, OnInit
{
    protected form!: FormGroup;
    private cepSub: Subscription | undefined;

    constructor(
        responsiveService: ResponsiveService,
        activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private enderecoService: EnderecoService,
        private router: Router,
        private empresaService: EmpresaService,
        private messageService: MessageService,
        private formLockService: FormLockService
    ) {
        super(responsiveService);
        // Activated Route Observable
        activatedRoute.paramMap.pipe(take(1)).subscribe((paramMap: ParamMap) => {
            if(paramMap.has('id')){
                const id = parseInt(paramMap.get('id') || '0');
                empresaService.getById(id).pipe(take(1)).subscribe({
                    next: response => {
                        
                    }
                })
            }
        })
    }

    ngOnInit(): void {
        // Create Form
        this.form = this.formBuilder.group({
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
        });
        this.form.disable();
        // Observable Form Lock
        this.formLockService.isLocked$().subscribe((isLocked: boolean) => {
            this.lockEvent(isLocked);
        });
        // Observable Input CEP
        this.cepSub = this.form
            .get("cep")
            ?.valueChanges.pipe(
                switchMap((cep) => {
                    return iif(
                        () =>
                            cep != null &&
                            cep.length === 8 &&
                            (this.form.get("cep")?.touched || false),
                        this.enderecoService.searchByCep(cep).pipe(take(1)),
                        EMPTY
                    );
                }),
                debounceTime(500)
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

    ngOnDestroy(): void {
        if (this.cepSub) this.cepSub.unsubscribe;
        // this.empresaService.setSelectedData(undefined);
    }

    protected lockEvent(isLocked: boolean): void {
        if (isLocked) {
            this.form.disable();
        } else {
            this.form.enable();
            this.form.get("id")?.disable();
            this.form.get("crt")?.disable();
        }
    }

    protected submit(): void {
        // this.loading = true;
        const mode = this.form.get("id")?.value ? "update" : "create";

        this.empresaService[mode](this.form.getRawValue())
            .pipe(first())
            .subscribe({
                next: (response) => {
                    // this.loading = false;
                    this.messageService.add({
                        severity: "success",
                        summary: `Produto ${
                            mode === "update" ? "alterado" : "criado"
                        } com sucesso!`,
                    });
                },
                error: (err) => {
                    // this.loading = false;
                    this.messageService.add({
                        severity: "error",
                        summary: err.error?.erro || "Erro Desconhecido",
                        detail: `${err.statusText || "Erro"} ${err.status}`,
                    });
                },
                complete: () => this.router.navigate(["/home/produtos"]),
            });
    }
}
