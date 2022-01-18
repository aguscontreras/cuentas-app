import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toast: HTMLIonToastElement = null;

  constructor(private toastController: ToastController) {}

  presentToast(message: string): void {
    const toastData = {
      duration: 3000,
      position: 'top',
      message,
    };

    this.showToast(toastData);
  }

  private async showToast(data: any) {
    this.toast ? this.toast.dismiss() : false;
    this.toast = await this.toastController.create(data);
    this.toast.present();
  }
}
