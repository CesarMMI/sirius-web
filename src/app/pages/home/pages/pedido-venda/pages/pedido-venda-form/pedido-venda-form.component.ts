import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { MenuItem } from "primeng/api";
import { first } from "rxjs";

@Component({
    selector: "app-pedido-venda-form",
    template: `
        <app-form-wrapper
            title="Pedido de Venda"
            [padding]="false"
            [margin]="false"
        >
            <p-tabMenu [model]="items"></p-tabMenu>
            <router-outlet></router-outlet>
        </app-form-wrapper>
    `,
    styles: [],
})
export class PedidoVendaFormComponent {
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
            { label: "Geral", routerLink: "geral" },
            { label: "Itens", routerLink: "itens", disabled: !this.editMode },
            {
                label: "Pagamentos",
                routerLink: "pagamentos",
                disabled: !this.editMode,
            },
        ];
    }
}
