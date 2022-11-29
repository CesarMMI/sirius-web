import { Component } from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { MenuItem } from "primeng/api";
import { first } from "rxjs";

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
    items: MenuItem[];
    private editMode: boolean = false;

    constructor(ac: ActivatedRoute) {
        ac.parent?.url
            .pipe(first())
            .subscribe((url: UrlSegment[]) =>
                url[0].path === "add"
                    ? (this.editMode = false)
                    : (this.editMode = true)
            );
        //
        this.items = [
            { label: "Geral", icon: "pi pi-user", routerLink: "geral" },
            { label: "Endereços", icon: "pi pi-home", routerLink: "enderecos", disabled: !this.editMode },
        ];
    }
}
