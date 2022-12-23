import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    Type,
    ViewChild,
    ViewContainerRef,
} from "@angular/core";
import { Subscription } from "rxjs";

import { AdvancedFilterForm } from "../../../models/advanced-filter-form/advanced-filter-form";
import { FilterAdvancedService } from "./services/filter-advanced.service";

@Component({
    selector: "app-filter-advanced",
    template: `
        <p-sidebar
            position="right"
            [dismissible]="false"
            [(visible)]="display"
            styleClass="p-sidebar-lg"
            (visibleChange)="visibleChange($event)"
        >
            <ng-container #container></ng-container>
        </p-sidebar>
    `,
    styleUrls: ['./filter-advanced.component.scss']
})
export class FilterAdvancedComponent implements OnDestroy {
    private filtersSub!: Subscription;
    constructor(protected filterAdvancedService: FilterAdvancedService) {
        this.filtersSub = filterAdvancedService.getFilters().subscribe((filters) => {
            if (filters) this.onFilter.emit(filters)
        });
    }
    ngOnDestroy(): void {
        this.filtersSub.unsubscribe();
    }

    @Input() currTagert!: Type<AdvancedFilterForm>;
    @ViewChild("container", { read: ViewContainerRef })
    container!: ViewContainerRef;

    @Input() display!: boolean;
    @Output() displayChange = new EventEmitter<boolean>();

    @Output() onFilter = new EventEmitter<any>();

    protected visibleChange(isVisible: boolean) {
        this.displayChange.emit(isVisible);
        if (isVisible) this.renderComponent();
    }

    protected renderComponent() {
        this.container.clear();
        this.container.createComponent(this.currTagert);
    }
}
