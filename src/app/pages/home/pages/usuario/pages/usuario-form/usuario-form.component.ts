import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { IUsuario } from "../../models/usuario";
import { UsuarioService } from "../../services/usuario.service";

@Component({
    templateUrl: "./Usuario-form.component.html",
    styles: [],
})
export class UsuarioFormComponent extends FormComponent<IUsuario> {
    constructor(
        formBuilder: FormBuilder,
        private usuarioService: UsuarioService,
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
            "Usuario",
            "/home/usuarios",
            usuarioService,
            ["id"],
            formBuilder.group({
                id: { value: null, disabled: true },
                nome: null,
                ultimoNome: null,
                email: null,
                celular: null,
                vendedorId: null,
            })
        );
    }
}
