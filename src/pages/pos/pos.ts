import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-pos',
    templateUrl: 'pos.html',
})
export class PosPage {
    @ViewChild('barcode_input') barcode_input;
    barcode: string;
    moneyStart: number;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.moneyStart = this.navParams.get('moneyAtStart');
        this.barcode = '';
    }

    ionViewDidLoad() {
        setTimeout(() => {
            this.barcode_input.setFocus();
        }, 10);
        console.log('ionViewDidLoad PosPage ' + this.moneyStart);
    }

    ionViewDidEnter() {

    }

    onInput(ev: any) {

    }

}
