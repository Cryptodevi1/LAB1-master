import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LAB4PageRoutingModule } from './lab4-routing.module';

import { LAB4Page } from './lab4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LAB4PageRoutingModule
  ],
  declarations: [LAB4Page]
})
export class LAB4PageModule {}
