import { Component, ViewChild } from '@angular/core';
import {NavController, IonicPage, ToastController} from 'ionic-angular';
import {User} from "../../providers/providers";
import {MainPage} from "../pages";
import {TranslateService} from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-login-background-video',
  templateUrl: 'login-background-video.html'
})
export class LoginBackgroundVideoPage {

  @ViewChild('player') player;

  private loginErrorString: string;

  constructor(public navCtrl: NavController,
              public user: User,
              public toastCtrl: ToastController,
              public translateService: TranslateService)  { }

  // It's interesting to remove the src and put it back
  // when entering and leaving the page so there are no memory leaks.
  ionViewWillLeave() {
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })

    this.player.nativeElement.src = '';
    this.player.nativeElement.load();
  }

  ionViewWillEnter() {
    this.player.nativeElement.src = 'assets/video/background-480.mp4';
    this.player.nativeElement.load();
  }

  ionViewDidLoad() {

  }

  goToSignup() {
    console.log('Signup clicked');
  }

  goToLogin() {
    console.log('Login clicked');
  }
  doLoginFB() {
    this.user.loginFB().then((res) => {
        this.navCtrl.push(MainPage);
      })
      .catch(() => {
        let toast = this.toastCtrl.create({
          message: this.loginErrorString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      })

  }
}
