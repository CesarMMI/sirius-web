import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SimpleWrapperComponent } from "./simple-wrapper.component";

@NgModule({
  declarations: [SimpleWrapperComponent],
  imports: [CommonModule],
  exports: [SimpleWrapperComponent],
})
export class SimpleWrapperModule {}
