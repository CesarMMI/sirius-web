import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-simple-wrapper",
  template: `
    <div class="w-full h-full flex justify-content-center align-items-center">
      <div
        [class]="'w-' + width + ' p-' + padding"
        class="shadow-3 border-round-md"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleWrapperComponent {
  @Input() width: number = 6;
  @Input() padding: number = 4;

  constructor() {}
}
