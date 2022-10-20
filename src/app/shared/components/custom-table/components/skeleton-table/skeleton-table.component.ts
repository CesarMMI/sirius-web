import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-table',
  template: `
    <p>
      skeleton-table works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
