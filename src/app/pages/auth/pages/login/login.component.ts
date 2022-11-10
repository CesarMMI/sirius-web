import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { first } from "rxjs";
import { AuthService } from "src/app/pages/auth/services/auth.service";

@Component({
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent {
  protected loginForm: FormGroup;
  protected loading: boolean = false;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {
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
