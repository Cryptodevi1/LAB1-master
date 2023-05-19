import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab7PageRoutingModule } from './lab7-routing.module';

import { Lab7Page } from './lab7.page';
import { MyHeaderModule } from '../my-header/my-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab7PageRoutingModule,
    MyHeaderModule
  ],
  declarations: [Lab7Page]
})
export class Lab7PageModule {}
