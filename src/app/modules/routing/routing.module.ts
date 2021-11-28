import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from 'src/app/layouts/app-layout/app-layout.component';

const default_route = 'mostPopularArticles';

export const routes: Routes = [
  { path: '', redirectTo: default_route, pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'mostPopularArticles',
        loadChildren: () =>
          import(
            '../../pages/mostPopularArticles/mostPopularArticles.module'
          ).then((m) => m.HomeModule),
      },
    ],
  },
  { path: '**', redirectTo: default_route },
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
