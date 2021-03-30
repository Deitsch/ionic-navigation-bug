import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppSubRoutes } from './start/start.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: AppSubRoutes.buildings,
    loadChildren: () => import('./building/building.module').then( m => m.BuildingPageModule)
  },
  {
    path: AppSubRoutes.procedures,
    loadChildren: () => import('./procedure/procedure.module').then( m => m.ProcedurePageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
