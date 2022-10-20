import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { EmpresaService } from "src/app/pages/empresa/services/empresa.service";
import { SimpleWrapperModule } from "src/app/shared/components/simple-wrapper/simple-wrapper.module";
import { TokenInterceptor } from "src/app/shared/services/token.interceptor";
import { UserTokenInterceptor } from "src/app/shared/services/user-token.interceptor";

import { NavbarModule } from "./components/navbar/navbar.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { EmpresaBarComponent } from './components/empresa-bar/empresa-bar.component';
import { EmpresaBarService } from "src/app/pages/home/services/empresa-bar.service";

@NgModule({
  declarations: [HomeComponent, EmpresaBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    SimpleWrapperModule,
    NavbarModule,
  ],
  providers: [
    EmpresaBarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class HomeModule {}
