import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";
import { Observable, tap } from "rxjs";
import { FormLockService } from "src/app/shared/services/form-lock.service";

import { GrupoUsuariosService } from "../grupo-usuarios/services/grupo-usuarios.service";
import { CertificadoService } from "./services/certificado.service";

@Component({
    templateUrl: "./certificado.component.html",
    styleUrls: ["./certificado.components.scss"],
})
export class CertificadoComponent implements OnDestroy {
    constructor(
        formBuilder: FormBuilder,
        grupoUsuariosService: GrupoUsuariosService,
        protected certificadoService: CertificadoService,
        protected messageService: MessageService,
        protected formLockService: FormLockService
    ) {
        // Form
        this.form = formBuilder.group({
            nomeCert: '',
            senhaCert: null,
            pathCert: null,
            serieCert: null,
        });
        // Form Lock
        this.isLocked$ = formLockService
            .isLocked$()
            .pipe(tap((isLocked) => this.lockEvent(isLocked)));
        // Permissões
        this.permissoes$ = grupoUsuariosService.permissoes$;
        //
        certificadoService.read().subscribe({
            next: (res) => this.form.get("nomeCert")?.patchValue(res),
            error: (err) => {
                this.formLockService.setLock(true);
                this.showLock = false;
                this.messageService.add({
                    severity: "error",
                    summary:
                        "Não foi possível recuperar as informações do certificado salvo",
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
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    protected get hasCertificado(): boolean {
        if (this.form.get("nomeCert")!.value === "") return false;
        return true;
    }

    protected switchLock(): void {
        this.formLockService.switchLock();
    }

    protected uploadHandler(event: any) {
        console.log(event);
    }
}
