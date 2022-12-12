import { DatePipe } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { ToastModule } from "primeng/toast";
import { TokenInterceptor } from "src/app/shared/interceptors/token.interceptor";
import { UserTokenInterceptor } from "src/app/shared/interceptors/user-token.interceptor";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserInfoInterceptor } from "./shared/interceptors/user-info.interceptor";
import { CepPipe } from "./shared/pipes/cep.pipe";
import { CpfCnpjPipe } from "./shared/pipes/cpf-cnpj.pipe";
import { PhonePipe } from "./shared/pipes/phone.pipe";
import { PipesModule } from "./shared/pipes/pipes.module";
import { StatusPipe } from "./shared/pipes/status.pipe";
import { ResponsiveService } from "./shared/services/responsive.service";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ToastModule,
        PipesModule,
    ],
    providers: [
        DatePipe,
        PipesModule,
        DialogService,
        MessageService,
        ResponsiveService,
        ConfirmationService,
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
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UserInfoInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
