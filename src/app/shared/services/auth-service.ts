import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.router.navigateByUrl('/');
        location.reload();
      });

  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigateByUrl('/');
        location.reload();
      });
  }
}
