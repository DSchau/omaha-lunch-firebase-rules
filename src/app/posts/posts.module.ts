import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';

import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class PostsModule { }