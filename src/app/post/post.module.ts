import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostRoutingModule } from './post-routing.module';

import { SharedModule } from '../shared/shared.module';

import { PostComponent } from './post.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    PostRoutingModule
  ],
  declarations: [
    PostComponent,
    CommentsComponent,
    CommentComponent
  ]
})
export class PostModule { }
