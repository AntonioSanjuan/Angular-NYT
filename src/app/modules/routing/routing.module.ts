import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from 'src/app/layouts/app-layout/app-layout.component';

const default_route = 'home';

export const routes: Routes = [
  { path: '', redirectTo: default_route, pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./../../pages/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  { path: '**', redirectTo: default_route },
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
