import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { combineLatest, map, Observable } from "rxjs";
import { SelectDataService } from "../select-data.service";

@Component({
    selector: "app-select-data-table",
    templateUrl: "./select-data-table.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDataTableComponent {
    protected data$: Observable<any>;

    constructor(selectDataService: SelectDataService) {
        this.data$ = combineLatest([
            selectDataService.data$,
            selectDataService.currentType$
        ]).pipe(
            map(([data, type]) => {
                return {
                    ...data,
                    type
                }
            })
        );
    }
}
