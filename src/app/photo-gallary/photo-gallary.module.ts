import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoGallaryPageRoutingModule } from './photo-gallary-routing.module';

import { PhotoGallaryPage } from './photo-gallary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoGallaryPageRoutingModule
  ],
  declarations: [PhotoGallaryPage]
})
export class PhotoGallaryPageModule {}
