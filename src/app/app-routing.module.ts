import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'photo-gallary',
    pathMatch: 'full'
  },
  {
    path: 'photo-gallary',
    loadChildren: () => import('./photo-gallary/photo-gallary.module').then( m => m.PhotoGallaryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
