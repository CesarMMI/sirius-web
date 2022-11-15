import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { first } from "rxjs";
import { AuthService } from "src/app/pages/auth/services/auth.service";
import { ResponsiveComponent } from "src/app/shared/components/responsive-component/responsive-component";
import { ResponsiveService } from "src/app/shared/services/responsive.service";

@Component({
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent extends ResponsiveComponent {
  protected loginForm: FormGroup;
  protected loading: boolean = false;

  constructor(
    formBuilder: FormBuilder,
    responsiveService: ResponsiveService,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
  ) {
    super(responsiveService);
    this.loginForm = formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      senha: ["", [Validators.required]],
    });
  }

  submit(): void {
    this.loading = true;
    this.authService
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe({
        error: (err) => {
          this.loading = false;
          this.messageService.add({
            severity: "error",
            summary: err.error.erro || "Não foi possível realizar o login",
            detail: `${err.status} ${err.statusText}`,
          });
        },
        complete: () => {
          this.loading = false;
          this.router.navigate(["/home"]);
        },
      });
  }
}
