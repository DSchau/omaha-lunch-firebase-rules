import { Component, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'opi-user',
  template: `<span>{{(user | async)?.displayName}}</span>`
})
export class UserComponent {
  @Input()
  set id(id) {
    if (id) {
      this.user = this.db.object(`users/${id}`);
    }
  }

  user: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) { }
}
