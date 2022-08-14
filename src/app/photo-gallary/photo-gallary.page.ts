import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-photo-gallary',
  templateUrl: './photo-gallary.page.html',
  styleUrls: ['./photo-gallary.page.scss'],
})
export class PhotoGallaryPage implements OnInit {
  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {}
      }]
    });
    await actionSheet.present();
  }
}
