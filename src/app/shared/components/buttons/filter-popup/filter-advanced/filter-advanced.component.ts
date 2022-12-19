import {
    Component,
    EventEmitter,
    Input,
    Output,
    Type,
    ViewChild,
    ViewContainerRef,
} from "@angular/core";
import { EmpresaAdvancedFilterComponent } from "src/app/pages/home/pages/empresa/pages/empresa-advanced-filter/empresa-advanced-filter.component";
import { AdvancedFilterForm } from "../../../advanced-filter-form/advanced-filter-form";

@Component({
    selector: "app-filter-advanced",
    template: `
        <p-sidebar
            appendTo="body"
            position="right"
            [baseZIndex]="10000"
            [(visible)]="display"
        >
            <ng-container #container></ng-container>
        </p-sidebar>

        <span
            class="text-primary-500 text-sm select-none cursor-pointer"
            (click)="renderComponent(); display = true"
            >Filtros avançados</span
        >
    `,
    styles: [],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterAdvancedComponent {
    @Input() currTagert!: Type<AdvancedFilterForm>;
    @ViewChild("container", { read: ViewContainerRef })
    container!: ViewContainerRef;

    protected display: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    renderComponent() {
      this.container.clear();
      this.container.createComponent(this.currTagert);
    }
}
