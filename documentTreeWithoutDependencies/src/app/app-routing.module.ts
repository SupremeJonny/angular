import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './modules/document/components/core/core.component';
import { AuthorizationGuard } from './modules/security/authorization-guard';
//import { LayoutComponent } from './modules/document/components/layout/layout.component';

/**
 * todo
 * - make canActivateChild
 * - make childRoutes
 */


// const childRoutes = [
//   {
//     path: 'core',
//     loadChildren: () => import('./modules/document/document.module').then(m => m.DocumentModule),
//     data: {}
//   }
// ];


const routes: Routes = [
  {
    path: 'core',
    component: CoreComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: '**',
    redirectTo: 'core'
  }
  /*
  todo later version
  {
    path: 'core',
    component: LayoutComponent,
    canActivate: [AuthorizationGuard],
    canActivateChild: [AuthorizationGuard],
    children: childRoutes
  },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

