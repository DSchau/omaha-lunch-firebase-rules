import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'opi-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.posts = db.list('/posts', {
      query: {
        orderByKey: true
      }
    });
  }
}
