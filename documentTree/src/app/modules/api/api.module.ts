import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './boundaries/api.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [],
  declarations: [],
  exports: []

})

export class ApiModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        ApiService
      ]
    };
  }

}
