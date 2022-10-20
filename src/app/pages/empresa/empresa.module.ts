import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { EmpresaService } from "src/app/pages/empresa/services/empresa.service";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { SimpleWrapperModule } from "src/app/shared/components/simple-wrapper/simple-wrapper.module";
import { PipesModule } from "src/app/shared/pipes/pipes.module";
import { UserTokenInterceptor } from "src/app/shared/services/user-token.interceptor";

import { CustomTableModule } from "../../shared/components/custom-table/custom-table.module";
import { EmpresaFormComponent } from "./components/empresa-form/empresa-form.component";
import { EmpresasTableComponent } from "./components/empresas-table/empresas-table.component";
import { EmpresaRoutingModule } from "./empresa-routing.module";

@NgModule({
  declarations: [EmpresasTableComponent, EmpresaFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EmpresaRoutingModule,
    ReactiveFormsModule,
    SimpleWrapperModule,
    CustomTableModule,
    CustomFormModule,
    ButtonModule,
    PipesModule
  ],
  providers: [
    EmpresaService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserTokenInterceptor,
      multi: true,
    },
  ],
})
export class EmpresaModule {}
