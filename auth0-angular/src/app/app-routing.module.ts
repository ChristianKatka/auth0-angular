import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/Auth/guards/authenticated.guard';
import { UnauthenticatedGuard } from 'src/Auth/guards/unauthenticated.guard';
import { LoginComponent } from 'src/Auth/login/login.component';
import { HomeFeatureContainerComponent } from 'src/Home/home-feature.container';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [AuthenticatedGuard],
    component: HomeFeatureContainerComponent,
  },
  {
    path: 'login',
    canActivate: [UnauthenticatedGuard],
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
