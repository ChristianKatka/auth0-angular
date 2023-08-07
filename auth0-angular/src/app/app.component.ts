import { Component } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(public auth0Service: Auth0Service) {}
}
