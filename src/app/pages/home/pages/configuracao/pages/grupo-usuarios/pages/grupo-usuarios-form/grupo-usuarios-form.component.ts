import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { first, Observable } from "rxjs";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";

import { GrupoUsuariosService } from "../../services/grupo-usuarios.service";

@Component({
    templateUrl: "./grupo-usuarios-form.component.html",
    styles: [],
})
export class GrupoUsuariosFormComponent extends FormComponent<any> {
    constructor(
        formBuilder: FormBuilder,
        protected grupoUsuariosService: GrupoUsuariosService,
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
            "Grupo",
            "/home/configuracoes/grupos-usuarios",
            grupoUsuariosService,
            ["id"],
            formBuilder.group({
                id: { value: null, disabled: true },
                nome: null,
                paginaInicial: 'notas-fiscais',
                id_empresa: null,
                permissoes: [],
            })
        );
        this.permissoes$ = grupoUsuariosService.permissoes$;
    }

    protected permissoes$: Observable<any>;
    protected permissoesArr: { id: any; value: any }[] = [];

    protected onPermissaoClick(event: any, permissao: any) {
        this.permissoesArr.push({
            id: permissao["id"],
            value: permissao["permite"],
        });
        console.log(permissao);
    }

    override submit(submitObj?: any): void {
        super.submit();
        if (this.form.get("id")?.value) {
            this.grupoUsuariosService
                .putPerms(this.permissoesArr)
                .pipe(first())
                .subscribe();
        }
    }
}
