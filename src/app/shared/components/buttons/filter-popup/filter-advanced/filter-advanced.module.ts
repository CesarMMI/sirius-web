import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterAdvancedComponent } from "./filter-advanced.component";
import { SidebarModule } from "primeng/sidebar";

@NgModule({
    declarations: [FilterAdvancedComponent],
    imports: [CommonModule, SidebarModule],
    exports: [FilterAdvancedComponent],
})
export class FilterAdvancedModule {}
