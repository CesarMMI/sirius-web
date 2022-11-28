import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
    selector: "app-cliente-form",
    template: `
        <app-form-wrapper title="Cliente" [padding]="false" [margin]="false">
            <p-tabMenu [model]="items"></p-tabMenu>
            <router-outlet></router-outlet>
        </app-form-wrapper>
    `,
    styles: [],
})
export class ClienteFormComponent {
    items: MenuItem[] = [
        { label: "Geral", icon: "pi pi-user", routerLink: "geral" },
        { label: "Endereços", icon: "pi pi-home", routerLink: "enderecos" },
    ];

    constructor() {}
}
