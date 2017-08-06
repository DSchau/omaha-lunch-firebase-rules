import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from '../shared/services/';

@Component({
  selector: 'opi-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  comments: FirebaseListObservable<any>;
  post: FirebaseObjectObservable<any>;
  commentForm: FormGroup;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private formBuilder: FormBuilder, private auth: AuthService) {
    this.comments = this.db.list(`/comments`);
  }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      text: ['', Validators.required]
    });

    this.route.params
      .subscribe(({ id }) => {
        this.post = this.db.object(`posts/${id}`);
      });
  }
  
  save({ text }, valid: boolean) {
    if (valid) {
      Observable.combineLatest(this.route.params, this.post, this.auth.user)
        .subscribe(([params, post, user]) => {
          const { id: parent } = params;
          this.comments
            .push({
              text,
              parent,
              author: user.uid
            })
            .then(db => {
              this.commentForm.reset();
            });
        });
    }
  }
}
