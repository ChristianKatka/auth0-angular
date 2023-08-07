import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({ providedIn: 'root' })
export class StateService {
  constructor(public auth0Service: Auth0Service) {}

  isLoggedIn$ = this.auth0Service.isAuthenticated$;
  user$ = this.auth0Service.user$;
}
