import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'configuracion',
        loadChildren: () =>
          import('./views/pages/configuracion/configuracion.module').then(
            (m) => m.ConfiguracionModule
          ),
      },
      {
        path: 'operaciones',
        loadChildren: () =>
          import(
            './views/pages/operaciones-extranjera/operaciones-extranjera.module'
          ).then((m) => m.OperacionesExtranjeraModule),
      },
      {
        path: 'comercial',
        loadChildren: () =>
          import('./views/pages/comercial/comercial.module').then(
            (m) => m.ComercialModule
          ),
      },
      {
        path: 'canal',
        loadChildren: () =>
          import('./views/pages/canal/canal.module').then(
            (m) => m.CanalModule
          ),
      },
      {
        path: 'utilidad',
        loadChildren: () =>
          import('./views/pages/utilidad/utilidad.module').then(
            (m) => m.UtilidadModule
          ),
      },
      {
        path: 'apps',
        loadChildren: () =>
          import('./views/pages/apps/apps.module').then((m) => m.AppsModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./views/pages/ui-components/ui-components.module').then(
            (m) => m.UiComponentsModule
          ),
      },
      {
        path: 'advanced-ui',
        loadChildren: () =>
          import('./views/pages/advanced-ui/advanced-ui.module').then(
            (m) => m.AdvancedUiModule
          ),
      },
      {
        path: 'form-elements',
        loadChildren: () =>
          import('./views/pages/form-elements/form-elements.module').then(
            (m) => m.FormElementsModule
          ),
      },
      {
        path: 'advanced-form-elements',
        loadChildren: () =>
          import(
            './views/pages/advanced-form-elements/advanced-form-elements.module'
          ).then((m) => m.AdvancedFormElementsModule),
      },
      {
        path: 'charts-graphs',
        loadChildren: () =>
          import('./views/pages/charts-graphs/charts-graphs.module').then(
            (m) => m.ChartsGraphsModule
          ),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./views/pages/tables/tables.module').then(
            (m) => m.TablesModule
          ),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/pages/icons/icons.module').then((m) => m.IconsModule),
      },
      {
        path: 'general',
        loadChildren: () =>
          import('./views/pages/general/general.module').then(
            (m) => m.GeneralModule
          ),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ],
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      type: 404,
      title: 'Page Not Found',
      desc: "Oopps!! The page you were looking for doesn't exist.",
    },
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent,
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
