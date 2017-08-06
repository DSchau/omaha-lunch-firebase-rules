import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';

const submitRoutes: Routes = [
  { path: 'users/:id', component: UserComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(submitRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
