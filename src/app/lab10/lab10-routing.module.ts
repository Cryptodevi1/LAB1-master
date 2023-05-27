import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab10Page } from './lab10.page';

const routes: Routes = [
  {
    path: '',
    component: Lab10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab10PageRoutingModule {}
