import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  // },
  {
    path: 'feeds',
    loadChildren: () => import('./modules/feeds/feeds.module').then(m => m.FeedsModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule)
  },
  {
    path: 'query',
    loadChildren: () => import('./modules/query/query.module').then(m => m.QueryModule)
  },
  {
    path: 'rules-and-alerts',
    loadChildren: () => import('./modules/rules/rules.module').then(m => m.RulesModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  { path: '', redirectTo: '/query', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
