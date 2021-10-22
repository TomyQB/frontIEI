import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadComponent } from './views/load.component'
import { LoadRoutingModule } from './load-routing.module';

import { materialModule } from './../../core/material.module';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ LoadComponent ],
  imports: [
    CommonModule,
    LoadRoutingModule,
    materialModule,
    MatListModule,
    MatCheckboxModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class LoadModule { }
