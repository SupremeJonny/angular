import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './components/core/core.component';

const routes: Routes = [
  {
    path: 'core',
    component: CoreComponent,
    data: {}
  },
  {
    path: '**', redirectTo: 'core'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
