import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './post.component';

const submitRoutes: Routes = [
  { path: 'posts/:id', component: PostComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(submitRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule { }
