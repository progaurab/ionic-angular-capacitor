import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoGallaryPage } from './photo-gallary.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoGallaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoGallaryPageRoutingModule {}
