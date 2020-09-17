import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationActivateGuard } from './modules/shared/auth/authenticationActivateGuard';
import {QueryComponent} from './modules/query/query.component';
import {FeedComponent} from './modules/feed/feed.component';

const routes: Routes = [
  {
    path: 'query',
    // canActivate: [AuthenticationActivateGuard],
    // component: QueryComponent
    loadChildren: () => import('./modules/query/query.module').then(m => m.QueryModule)
  },
  {
    path: 'groups',
    // canActivate: [AuthenticationActivateGuard],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'feeds',
    // canActivate: [AuthenticationActivateGuard],
    component: FeedComponent
  },
  {
    path: 'rules-and-alerts',
    // canActivate: [AuthenticationActivateGuard],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user-management',
    // canActivate: [AuthenticationActivateGuard],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '', 
    redirectTo: '/query', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
