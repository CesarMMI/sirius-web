import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { first } from "rxjs";
import { AuthService } from "src/app/pages/auth/services/auth.service";
import { ResponsiveComponent } from "src/app/shared/components/responsive-component/responsive-component";
import { ResponsiveService } from "src/app/shared/services/responsive.service";

@Component({
  templateUrl: "./singup.component.html",
  styles: [],
})
export class SingupComponent extends ResponsiveComponent{
  protected signupForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    responsiveService: ResponsiveService,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    super(responsiveService);
    this.signupForm = formBuilder.group({
      nome: ["", [Validators.required]],
      ultimoNome: [""],
      email: ["", [Validators.email, Validators.required]],
      celular: ["", [Validators.required]],
      senha: ["", [Validators.required]],
    });
  }

  submit(): void {
    this.authService
      .signup(this.signupForm.value)
      .pipe(first())
      .subscribe({
        error: (err: HttpErrorResponse) =>
          this.messageService.add({
            severity: "error",
            summary: err.error.erro || "Não foi possível realizar o cadastro",
            detail: `${err.status} ${err.statusText}`,
          }),
        complete: () => {
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
