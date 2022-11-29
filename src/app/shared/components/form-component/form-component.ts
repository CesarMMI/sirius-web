import { Directive } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { first, from, Subscription } from "rxjs";

import { CrudService } from "../../services/crud-service";
import { FormLockService } from "../../services/form-lock.service";

@Directive()
export class FormComponent<T> {
    private formLockSub!: Subscription;
    protected loading: boolean = false;

    constructor(
        protected router: Router,
        protected messageService: MessageService,
        protected activatedRoute: ActivatedRoute,
        protected formLockService: FormLockService,
        private name: string,
        private route: string,
        private crudService: CrudService<T>,
        private lockedFields: string[],
        protected form: FormGroup
    ) {}

    ngOnInit(): void {
        this.activatedRoute.paramMap
            .pipe(first())
            .subscribe((paramMap: ParamMap) => {
                if (paramMap.has("id")) {
                    const id = parseInt(paramMap.get("id") || "0");
                    this.crudService
                        .getById(id)
                        .pipe(first())
                        .subscribe({
                            next: (response) =>
                                Object.keys(this.form.controls).forEach((key) =>
                                    this.form.controls[key].setValue(
                                        response[key as keyof T]
                                    )
                                ),
                        });
                } else {
                    const parentParamMap =
                        this.activatedRoute.snapshot.parent?.paramMap;
                    if (parentParamMap?.has("id")) {
                        const id = parseInt(parentParamMap.get("id") || "0");
                        this.crudService
                            .getById(id)
                            .pipe(first())
                            .subscribe({
                                next: (response) => {
                                    Object.keys(this.form.controls).forEach(
                                        (key) => {
                                            this.form.controls[key].patchValue(
                                                response[key as keyof T]
                                            );
                                        }
                                    );
                                },
                            });
                    } else {
                        this.formLockService.setLock(false);
                    }
                }
            });
        this.formLockSub = this.formLockService
            .isLocked$()
            .subscribe((isLocked: boolean) => this.lockEvent(isLocked));
    }

    ngOnDestroy(): void {
        this.formLockSub.unsubscribe();
        this.formLockService.setLock(true);
    }

    lockEvent(isLocked: boolean): void {
        if (isLocked) {
            this.form.disable({ emitEvent: false });
        } else {
            this.form.enable({ emitEvent: false });
            for (let i in this.lockedFields) {
                try {
                    this.form
                        .get(this.lockedFields[i])
                        ?.disable({ emitEvent: false });
                } catch (error) {
                    throw new Error("Campo informado não existe no form");
                }
            }
        }
    }

    submit(submitObj?: T | Object): void {
        this.loading = true;
        const mode = this.form.get("id")?.value ? "update" : "create";

        this.crudService[mode](submitObj ? submitObj : this.form.getRawValue())
            .pipe(first())
            .subscribe({
                next: (response) => {
                    this.loading = false;
                    this.messageService.add({
                        severity: "success",
                        summary: `${this.name} ${
                            mode === "update" ? "alterado" : "criado"
                        } com sucesso!`,
                    });
                },
                error: (err) => {
                    this.loading = false;
                    this.messageService.add({
                        severity: "error",
                        summary: err.error?.erro || "Erro Desconhecido",
                        detail: `${err.statusText || "Erro"} ${err.status}`,
                    });
                },
                complete: () => this.router.navigate([this.route]),
            });
    }
}
