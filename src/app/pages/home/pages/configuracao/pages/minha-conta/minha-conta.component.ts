import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";
import { first } from "rxjs";
import { MinhaContaService } from "./services/minha-conta.service";

@Component({
    selector: "app-minha-conta",
    templateUrl: "./minha-conta.component.html",
    styles: [],
})
export class MinhaContaComponent {
    protected userForm: FormGroup;

    protected passwordLoading: boolean = false;
    protected displayDialog: boolean = false;
    protected passwordForm: FormGroup;
    protected confirmControl: FormControl;

    constructor(
        formBuilder: FormBuilder,
        private messageService: MessageService,
        private minhaContaService: MinhaContaService
    ) {
        // User Form
        this.userForm = formBuilder.group({
            nome: null,
            ultimoNome: null,
            celular: null,
            email: null,
        });
        // Password Form
        this.passwordForm = formBuilder.group({
            email: null,
            senhaAtual: null,
            novaSenha: null,
        });
        // Confirmar Control
        this.confirmControl = formBuilder.control(null);
    }

    submitPassword(): void {
        if (!this.confirmPassword()) {
            this.messageService.add({
                severity: "warn",
                summary: "Senhas não batem",
            });
            return;
        }

        this.passwordLoading = true;
        this.minhaContaService
            .mudarSenha({
                email: this.passwordForm.get("email")?.value,
                senhaAtual: this.passwordForm.get("senhaAtual")?.value,
                novaSenha: this.passwordForm.get("novaSenha")?.value,
            })
            .pipe(first())
            .subscribe({
                next: () => {
                    this.passwordLoading = false;
                    this.messageService.add({
                        severity: "success",
                        summary: "Senha alterada com sucesso",
                    });
                    this.displayDialog = false;
                },
                error: (err) => {
                    this.passwordLoading = false;
                    this.messageService.add({
                        severity: "error",
                        summary:
                            err.error.erro ||
                            err.error.error ||
                            err.error ||
                            "Não foi possível alterar na senha",
                    });
                },
            });
    }

    private confirmPassword() {
        if (
            this.passwordForm.get("novaSenha")?.value !=
            this.confirmControl.value
        )
            return false;
        return true;
    }
}
