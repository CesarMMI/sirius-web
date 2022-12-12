import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { MessageService } from "primeng/api";
import { UsuarioService } from "../../../../services/usuario.service";

@Component({
    selector: "app-adicionar-usuario",
    template: `
        <form (submit)="$event.preventDefault(); submit()" class="grid m-0">
            <!-- Email -->
            <app-input-text
                class="col-12"
                label="Email"
                [control]="$any(email)"
            ></app-input-text>

            <!-- Button -->
            <div class="col-12 flex">
                <button
                    pButton
                    type="submit"
                    label="Salvar"
                    class="ml-auto"
                    [loading]="loading"
                    [disabled]="email.invalid"
                ></button>
            </div>
        </form>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdicionarUsuarioComponent {
    constructor(
        formBuilder: FormBuilder,
        private messageService: MessageService,
        private usuarioService: UsuarioService
    ) {
        this.email = formBuilder.control("", [
            Validators.required,
            Validators.email,
        ]);
    }

    protected email: FormControl;
    protected loading: boolean = false;

    @Output() onSubmitSuccess = new EventEmitter();
    protected submit(): void {
        this.usuarioService.insertUser(this.email.value).subscribe((res) => {
            this.messageService.add({
                severity: "success",
                summary: "Usuário adicionado a empresa!",
            });
            this.onSubmitSuccess.emit();
        });
    }
}
