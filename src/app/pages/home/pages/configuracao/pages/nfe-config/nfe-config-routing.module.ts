import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NfeConfigComponent } from './nfe-config.component';

const routes: Routes = [{ path: '', component: NfeConfigComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NfeConfigRoutingModule { }
