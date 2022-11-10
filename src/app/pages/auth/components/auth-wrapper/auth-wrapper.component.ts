import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponsiveObject, ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-auth-wrapper',
  template: `
    <ng-container
      *ngIf="responsiveObject$ | async as responsiveObject"
    >
    <div class="w-full h-full flex align-items-center justify-content-center">
      <div
        [ngClass]="{
          'w-11' : responsiveObject.breakpoint === 'xs' 
        }"
        class="w-4 p-4 shadow-1">
        <ng-content></ng-content>
      </div>  
    </div>
    </ng-container>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthWrapperComponent {

  protected responsiveObject$: Observable<IResponsiveObject>;

  constructor(
    private responsiveService: ResponsiveService
  ) {
    this.responsiveObject$ = responsiveService.responsiveObject$;
  }

}
