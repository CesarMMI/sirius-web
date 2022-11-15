import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { first, Observable } from "rxjs";
import { AuthService } from "src/app/pages/auth/services/auth.service";
import { ResponsiveComponent } from "src/app/shared/components/responsive-component/responsive-component";
import { ResponsiveService } from "src/app/shared/services/responsive.service";

@Component({
  templateUrl: "./singup.component.html",
  styles: [],
})
export class SingupComponent extends ResponsiveComponent{
  protected signupForm: FormGroup;
  protected loading: boolean = false;
  protected responsiveObject$: Observable<IResponsiveObject>;

  constructor(
    formBuilder: FormBuilder,
    responsiveService: ResponsiveService,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    private responsiveService: ResponsiveService
  ) {
    this.signupForm = formBuilder.group({
      nome: ["", [Validators.required]],
      ultimoNome: [""],
      email: ["", [Validators.email, Validators.required]],
      celular: ["", [Validators.required]],
      senha: ["", [Validators.required]],
    });
    // Responsive Object
    this.responsiveObject$ = responsiveService.responsiveObject$;
  }

  submit(): void {
    this.loading = true;
    this.authService
      .signup(this.signupForm.value)
      .pipe(first())
      .subscribe({
        error: (err: HttpErrorResponse) => {
          this.loading = false;
          this.messageService.add({
            severity: "error",
            summary: err.error.erro || "Não foi possível realizar o cadastro",
            detail: `${err.status} ${err.statusText}`,
          });
        },
        complete: () => {
          this.loading = false;
          this.messageService.add({
            severity: "success",
            summary: "Cadastro realizado com sucesso",
            detail: "Agora, faça o login para prosseguir",
          }),
            this.router.navigate([".."]);
        },
      });
  }
}
