import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  username = "";

  constructor(public navCtrl: NavController) {

  }

  setUsername(newUsername: string) {
    this.username = newUsername;
  }

}
