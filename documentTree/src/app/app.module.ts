//npm 
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//project
import { AppComponent } from './app.component';
import { DocumentConfig } from './modules/document/document.config';
import { AuthorizationService } from './modules/security/authorization.service';
import { SecurityModule } from './modules/security/security.module';
//3rd party
import { MarkdownModule } from 'ngx-markdown';

export function init(authService: AuthorizationService,documentConfig: DocumentConfig) {
  return () => Promise.all([authService.init(),documentConfig.init()]);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //npm scope
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // project scope
    SecurityModule.forRoot(),
    // 3rd party
    MarkdownModule.forRoot(),
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [AuthorizationService, DocumentConfig],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
