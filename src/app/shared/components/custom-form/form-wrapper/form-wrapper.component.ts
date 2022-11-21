import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import {
  IResponsive,
  ResponsiveService,
} from "src/app/shared/services/responsive.service";

@Component({
  selector: "app-form-wrapper",
  template: `
      <div class="px-2 py-2 surface-0 border-round-lg">
        <header class="flex align-items-center mb-3">
          <span class="text-3xl text-color font-bold">{{
            (isEdit ? "Editar " : "Adicionar ") + title
          }}</span>
          <button
            pButton
            *ngIf="isEdit && showLock"
            [icon]="isLocked ? 'bi bi-lock' : 'bi bi-unlock'"
            (click)="switchLock()"
            class="p-button-sm p-button-text p-button-rounded"
            [ngClass]="{
              'p-button-secondary': isLocked
            }"
          ></button>
          <button
            pButton
            [routerLink]="isEdit ? '../..' : '..'"
            icon="pi pi-arrow-left"
            class="ml-auto p-button-sm p-button-secondary p-button-text p-button-rounded"
          ></button>
        </header>
        <div>
          <ng-content></ng-content>
        </div>
      </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormWrapperComponent implements OnDestroy, AfterViewChecked {
  @Input() title: string = "";
  protected isEdit?: boolean;

  @Input() isChild: boolean = false;
  @Output() lockEvent = new EventEmitter<boolean>();
  protected isLocked: boolean = true;

  @Input() showLock: boolean = true;

  private lockSub: Subscription;
  constructor(
    activatedRoute: ActivatedRoute,
    private formLockService: FormLockService
  ) {
    if (activatedRoute.snapshot.url.length > 0) {
      this.isEdit = activatedRoute.snapshot.url[0].toString() === "edit";
    } else {
      if (activatedRoute.parent)
        this.isEdit =
          activatedRoute.parent.snapshot.url[0].toString() === "edit";
    }
    // Form Lock
    this.lockSub = formLockService
      .isLocked$()
      .subscribe((isLocked: boolean) => (this.isLocked = isLocked));
  }

  ngAfterViewChecked(): void {
    if (this.isEdit) {
      // If edit mode
      if (!this.isChild) {
        // If is parent form
        this.setLock(true);
      } else {
        // If is child form
        this.setLock(false);
      }
    } else {
      // If add mode
      this.setLock(false);
    }
  }

  ngOnDestroy(): void {
    this.lockSub.unsubscribe();
  }

  protected setLock(isLocked: boolean) {
    this.formLockService.setLock(isLocked);
    this.lockEvent.emit(this.isLocked);
  }

  protected switchLock(): void {
    this.formLockService.switchLock();
    this.lockEvent.emit(this.isLocked);
  }
}
