import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteFormComponent } from './pages/cliente-form/cliente-form.component';
import { ClienteTableComponent } from './pages/cliente-table/cliente-table.component';

const routes: Routes = [
  { path: "", component: ClienteTableComponent },
  { path: "add", component: ClienteFormComponent },
  {
    path: "edit/:id",
    component: ClienteFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
