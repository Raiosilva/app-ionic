import { TabsPage } from './../tabs/tabs.page';
import { NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToTabsPage() {
    this.navCtrl.navigateRoot('');
  }

}
