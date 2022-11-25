import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

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
    items: MenuItem[] = [
        {
            label: "Minha Conta",
            icon: "pi pi-user",
            routerLink: "minha-conta",
        },
        {
            label: "Grupos de Usuários",
            icon: "pi pi-users",
            routerLink: "grupos-usuarios",
        },
        {
            label: "Listas de Preços",
            icon: "pi pi-tags",
            routerLink: "listas-precos",
        },
        { label: "Configurações da NFe", icon: "pi pi-calendar", routerLink: "nfe-configs" },
        {
            label: "Cerificados",
            icon: "pi pi-pencil",
            routerLink: "certificados",
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
