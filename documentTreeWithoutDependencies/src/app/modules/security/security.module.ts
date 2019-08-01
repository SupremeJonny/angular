import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationService } from './authorization.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [],
  declarations: []
})
export class SecurityModule {
  static forRoot(): any {
    return {
      ngModule: SecurityModule,
      providers: [
        AuthorizationService
      ]
    };
  }
 }
