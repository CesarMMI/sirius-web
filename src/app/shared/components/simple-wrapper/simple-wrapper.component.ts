import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-simple-wrapper",
  template: `
    <div
      class="w-full h-full shadow-2 border-round-lg"
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
