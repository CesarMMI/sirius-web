import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { EmpresaService } from "src/app/pages/empresa/services/empresa.service";
import { EmpresaBarService } from "src/app/pages/home/services/empresa-bar.service";

@Component({
  selector: "app-empresa-bar",
  template: ` <div></div> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpresaBarComponent {
  constructor() {
    
  }
}
