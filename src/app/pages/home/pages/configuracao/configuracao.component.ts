import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { first } from "rxjs";
import { UserInfoService } from "src/app/shared/services/user-info/user-info.service";

@Component({
    selector: "app-configuracao",
    template: `
        <div class="surface-0 border-round-lg overflow-hidden">
            <p-tabMenu [model]="items"></p-tabMenu>
            <div class="p-2">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styleUrls: ["./configuracao.component.scss"],
})
export class ConfiguracaoComponent implements OnInit {
    items: MenuItem[] = [];

    constructor(private userInfoService: UserInfoService) {}

    ngOnInit(): void {
        this.userInfoService.userInfo$.pipe(first()).subscribe((userInfo) => {
            this.items = [
                {
                    visible: userInfo?.permissoes.configuracoes.dadosDaConta,
                    label: "Minha Conta",
                    icon: "pi pi-user",
                    routerLink: "minha-conta",
                },
                {
                    visible: userInfo?.permissoes.configuracoes.gruposUsuarios,
                    label: "Grupos de Usuários",
                    icon: "pi pi-users",
                    routerLink: "grupos-usuarios",
                },
                {
                    visible: userInfo?.permissoes.configuracoes.listasPrecos,
                    label: "Listas de Preços",
                    icon: "pi pi-tags",
                    routerLink: "listas-precos",
                },
                {
                    visible: userInfo?.permissoes.configuracoes.configuracoesNfe,
                    label: "Configurações da NFe",
                    icon: "pi pi-calendar",
                    routerLink: "nfe-configs",
                },
                {
                    visible: userInfo?.permissoes.configuracoes.certificados,
                    label: "Cerificados",
                    icon: "pi pi-pencil",
                    routerLink: "certificados",
                },
            ];
        });
    }
}
