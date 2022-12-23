import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: "app-custom-table-header",
    template: `
        <ng-container *ngIf="title != ''">
            <div
                class="p-1 bg-white flex flex-column justify-content-center lg:justify-content-start lg:flex-row align-items-center border-round-top-xs surface-border border-bottom-1"
            >
                <span class="text-2xl text-color font-bold">{{ title }}</span>
                <div class="lg:ml-auto"><ng-content></ng-content></div>
            </div>
        </ng-container>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableHeaderComponent {
    @Input() title: string = "";

    constructor() {}
}
