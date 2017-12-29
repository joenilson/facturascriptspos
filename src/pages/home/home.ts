import { Component } from '@angular/core';
import { IonicPage, AlertController, LoadingController, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user';
import {User} from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public username: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private userProvider: UserProvider) {
      
  }
  
  item: User;

    loaded: boolean;

    async getItem() {
        //let id = this.navParams.get('id') as string;
        let id = '' as string;
        this.item = await this.userProvider.get(id);
        this.loaded = true;
    }

    cancel() {
        this.navCtrl.pop();
    }

    gotoItem(item: User) {
        this.navCtrl.push('homePage', {id: item.id});
    }



    add() {
        this.navCtrl.push('StudentPage', {id: ''});
    }

    ionViewWillEnter() {
        //this.getList();
    }
    
    ionViewDidLoad() {
        this.username = this.navParams.get('username');
        this.getItem();
        console.log('ionViewDidLoad LoginPage');
    }

}
