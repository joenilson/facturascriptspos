import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the StartCasherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-start-casher',
    templateUrl: 'start-casher.html',
})
export class StartCasherPage {
    form: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad StartCasherPage');
    }

    CloseModal() {
        this.viewCtrl.dismiss(this.form);
    }

}
