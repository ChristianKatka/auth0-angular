import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private auth0Service: Auth0Service) {}

  login() {
    console.log('login');
    this.auth0Service.loginWithRedirect();
  }

  logout() {
    this.auth0Service.logout({
      // Specify the returnTo option when calling logout to tell Auth0 where it should redirect to after a successful logout.
      // This value must be specified in the Allowed Logout URLs setting in the dashboard.
      logoutParams: {
        returnTo: 'http://localhost:4200',
      },
    });
  }
}
