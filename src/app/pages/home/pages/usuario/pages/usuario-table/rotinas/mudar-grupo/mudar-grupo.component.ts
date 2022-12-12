import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output,
} from "@angular/core";
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { MessageService } from "primeng/api";
import { first, Subscription } from "rxjs";
import { GrupoUsuariosService } from "src/app/pages/home/pages/configuracao/pages/grupo-usuarios/services/grupo-usuarios.service";
import { IDropdownItem } from "src/app/shared/components/custom-form/models/DropdownItem";
import { UsuarioService } from "../../../../services/usuario.service";

@Component({
    selector: "app-mudar-grupo",
    template: `
        <form (submit)="$event.preventDefault(); submit()" class="grid m-0">
            <!-- Email -->
            <!-- <app-input-text
                class="col-12"
                label="Email"
                [control]="$any(email)"
                ></app-input-text> -->
            <app-input-dropdown
                class="col-12"
                label="Grupo"
                [control]="$any(grupoId)"
                [options]="grupos"
            ></app-input-dropdown>

            <!-- Button -->
            <div class="col-12 flex">
                <button
                    pButton
                    type="submit"
                    label="Salvar"
                    class="ml-auto"
                    [loading]="loading"
                    [disabled]="grupoId.invalid"
                ></button>
            </div>
        </form>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MudarGrupoComponent implements OnDestroy {
    constructor(
        formBuilder: FormBuilder,
        private messageService: MessageService,
        private usuarioService: UsuarioService,
        private grupoUsuariosService: GrupoUsuariosService
    ) {
        this.grupoId = formBuilder.control(null, [Validators.required]);
        this.usuarioId = formBuilder.control(null, [Validators.required]);
        this.selectedUsuarioSub = usuarioService.selectedUsuario$.subscribe(
            (usuario) => {
                if (usuario) {
                    this.usuarioId.setValue(usuario.id);
                } else {
                    this.usuarioId.setValue(null);
                }
            }
        );
        // Recupera grupos
        grupoUsuariosService
            .get()
            .pipe(first())
            .subscribe((grupos) => {
                let arr = [];
                for (let grupo of grupos.payload) {
                    arr.push({
                        label: grupo["nome"],
                        value: grupo["id"],
                    });
                }
                this.grupos = arr;
            });
    }

    protected usuarioId: FormControl;
    private selectedUsuarioSub: Subscription;

    protected grupoId: FormControl;
    protected loading: boolean = false;

    protected grupos: IDropdownItem[] = [];

    @Output() onSubmitSuccess = new EventEmitter();
    protected submit(): void {
        this.usuarioService
            .switchGrupo(this.usuarioId.value, this.grupoId.value)
            .subscribe((res) => {
                this.messageService.add({
                    severity: "success",
                    summary: "Grupo alterado com sucesso!",
                });
                this.onSubmitSuccess.emit();
            });
    }

    ngOnDestroy(): void {
        this.selectedUsuarioSub!.unsubscribe();
    }
}
