import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicPipe } from './shared/pipes/dynamic.pipe';
import { CpfCnpjPipe } from './shared/pipes/cpf-cnpj.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
