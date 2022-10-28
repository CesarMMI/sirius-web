import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-wrapper',
  template: `
    <div class="w-full h-full flex align-items-center justify-content-center">
      <div class="w-4 p-4 shadow-1">
        <ng-content></ng-content>
      </div>  
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
