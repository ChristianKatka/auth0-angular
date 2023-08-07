import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { components } from '.';
import { SharedModule } from 'src/Shared/shared.module';
import { AuthModule as Auth0Module } from '@auth0/auth0-angular';
import { auth0Config } from './instances/auth0';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    MaterialModule,
    Auth0Module.forRoot(auth0Config),
  ],
  exports: [],
  declarations: [...components],
  providers: [],
})
export class AuthModule {}
