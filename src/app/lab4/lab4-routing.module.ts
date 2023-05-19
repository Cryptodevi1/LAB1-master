import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LAB4Page } from './lab4.page';

const routes: Routes = [
  {
    path: '',
    component: LAB4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LAB4PageRoutingModule {}
