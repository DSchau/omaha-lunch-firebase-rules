import { Component } from '@angular/core';

import { AuthService } from '../shared/services/';

@Component({
  selector: 'opi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public auth: AuthService) {
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
