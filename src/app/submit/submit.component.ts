import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../shared/services/';

import { IPost } from './submit.interfaces';

@Component({
  selector: 'opi-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  postForm: FormGroup;
  constructor(private db: AngularFireDatabase, private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      url: '',
      text: ''
    });
  }
  
  save(form: IPost, valid: boolean) {
    if (valid) {
      this.auth.user
        .subscribe(user => {
          this.db.list('/posts')
            .push({
              ...form,
              author: user.uid
            })
            .then(() => {
              this.router.navigateByUrl('/posts');
            });
        });

    }
  }
}
