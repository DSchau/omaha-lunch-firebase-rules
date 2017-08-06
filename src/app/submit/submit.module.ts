import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SubmitRoutingModule } from './submit-routing.module';

import { SharedModule } from '../shared/shared.module';

import { SubmitComponent } from './submit.component';

@NgModule({
  declarations: [
    SubmitComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubmitRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class SubmitModule { }
