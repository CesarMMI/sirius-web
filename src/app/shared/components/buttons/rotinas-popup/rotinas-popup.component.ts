import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
    selector: "app-rotinas-popup",
    template: `
        <p-overlayPanel #op>
            <ng-template pTemplate>
                <p-menu [model]="items" styleClass="border-none"></p-menu>
            </ng-template>
        </p-overlayPanel>

        <button
            #btn
            pButton
            type="text"
            icon="bi bi-gear-wide-connected"
            class="p-button-sm p-button-text p-button-rounded p-button-plain"
            (click)="op.toggle($event)"
        ></button>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RotinasPopupComponent implements OnInit {
    @Input() items: MenuItem[] = [];

    constructor() {}

    ngOnInit(): void {}
}
