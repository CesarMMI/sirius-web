import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-simple-wrapper",
  template: `
    <div
      class="w-full h-full surface-0"
      [class]="'p-' + padding"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleWrapperComponent {
  @Input() padding: number = 0;

  constructor() {}

  
}
