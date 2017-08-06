import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'opi-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @Input()
  set ids(ids) {
    this.comments = Object.keys(ids || {})
      .map(id => ids[id]);  
  }

  comments: string[] = [];
}
