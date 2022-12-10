import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { Observable, Subscription, tap } from "rxjs";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { GrupoUsuariosService } from "../grupo-usuarios/services/grupo-usuarios.service";
import { NfeConfigService } from "./services/nfe-config.service";

@Component({
    templateUrl: "./nfe-config.component.html",
    styles: [],
})
export class NfeConfigComponent implements OnDestroy {
    constructor(
        formBuilder: FormBuilder,
        grupoUsuariosService: GrupoUsuariosService,
        protected nfeConfigService: NfeConfigService,
        protected messageService: MessageService,
        protected formLockService: FormLockService
    ) {
        // Form
        this.form = formBuilder.group({
            Idnfeconfig: null,
            Tpamb: null,
            Tpimp: null,
        });
        // Form Lock
        this.isLocked$ = formLockService
            .isLocked$()
            .pipe(tap((isLocked) => this.lockEvent(isLocked)));
        // Permissões
        this.permissoes$ = grupoUsuariosService.permissoes$;
        //
        nfeConfigService.read().subscribe({
            next: (res) => this.form.patchValue(res),
            error: (err) => {
                this.formLockService.setLock(true);
                this.showLock = false;
                this.messageService.add({
                    severity: "error",
                    summary:
                        "Não foi possível recuperar as configurações salvas",
                    detail: `${err.statusText || "Erro"} ${err.status}`,
                });
            },
        });
    }
    protected configs: any;

    protected form: FormGroup;
    protected loading: boolean = false;

    protected isLocked$: Observable<Boolean>;
    protected showLock: boolean = true;

    protected permissoes$: Observable<any>;

    ngOnDestroy() {
        this.formLockService.setLock(true);
    }

    lockEvent(isLocked: boolean): void {
        if (isLocked) {
            this.form.disable({ emitEvent: false });
        } else {
            this.form.enable({ emitEvent: false });
        }
    }

    protected switchLock(): void {
        this.formLockService.switchLock();
    }

    protected onPermissaoClick(event: any, permissao: any) {
        console.log(event);
        console.log(permissao);
    }

    protected submit(): void {
        this.loading = true;
        const mode = this.form.get("Idnfeconfig")?.value ? "update" : "create";

        this.nfeConfigService[mode](this.form.getRawValue())
            .subscribe({
                error: (err) => {
                    this.loading = false;
                    this.messageService.add({
                        severity: "error",
                        summary: err.error?.erro || "Erro Desconhecido",
                        detail: `${err.statusText || "Erro"} ${err.status}`,
                    });
                },
                complete: () => {
                    this.loading = false;
                    this.formLockService.setLock(true);
                    this.messageService.add({
                        severity: "success",
                        summary: `Configurações alteradas com sucesso!`,
                    });
                },
            });
    }
}
