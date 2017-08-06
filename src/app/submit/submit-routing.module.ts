import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubmitComponent } from './submit.component';

const submitRoutes: Routes = [
  { path: 'submit', component: SubmitComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(submitRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SubmitRoutingModule { }
