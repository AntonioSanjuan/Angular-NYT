import { AppLoginLayoutComponent } from './../../layouts/app-login-layout/app-login-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from 'src/app/layouts/app-layout/app-layout.component';

const defaultRoute = 'mostPopularArticles';

export const routes: Routes = [
  { path: '', redirectTo: defaultRoute, pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'mostPopularArticles',
        loadChildren: () =>
          import(
            '../../pages/mostPopularArticles/mostPopularArticles.module'
          ).then((m) => m.MostPopularArticlesModule),
      },
    ],
  },
  {
    path: '',
    component: AppLoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../../pages/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  { path: '**', redirectTo: defaultRoute },
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
