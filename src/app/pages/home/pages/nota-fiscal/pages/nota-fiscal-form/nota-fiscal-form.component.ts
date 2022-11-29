import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { MenuItem } from "primeng/api";
import { first } from "rxjs";

@Component({
    selector: "app-nota-fiscal-form",
    template: `
        <app-form-wrapper title="Nota Fiscal" [padding]="false" [margin]="false">
            <p-tabMenu [model]="items"></p-tabMenu>
            <router-outlet></router-outlet>
        </app-form-wrapper>
    `,
    styles: [],
})
export class NotaFiscalFormComponent {
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
            { label: "Destinatário", routerLink: "destinatario", disabled: !this.editMode },
            { label: "Informações Adicionais", routerLink: "infos", disabled: !this.editMode },
            { label: "Itens", routerLink: "enderecos", disabled: !this.editMode },
            { label: "Pagamentos", routerLink: "enderecos", disabled: !this.editMode },
            { label: "Totalizadores", routerLink: "totalizadores", disabled: !this.editMode },
            { label: "RetornoWS", routerLink: "retornows", disabled: !this.editMode },
        ];
    }
}
