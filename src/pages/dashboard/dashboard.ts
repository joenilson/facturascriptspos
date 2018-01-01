import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ModalController} from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-dashboard',
    templateUrl: 'dashboard.html',
})
export class DashboardPage {
    constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, public modalCtrl: ModalController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DashboardPage');
    }

    openPOS() {
        this.moneyAtCasherModal();
    }

    moneyAtCasherModal(){
        let addWeatherModal = this.modalCtrl.create('StartCasherPage');
        addWeatherModal.present();
        addWeatherModal.onDidDismiss(data=>{
            console.log("Data =>", data.value.money);
            this.navCtrl.push('PosPage', { moneyAtStart: data.value.money});
        });
    }

    closePOS() {
        this.navCtrl.push('CasherPage');
    }

    configPOS() {
        this.navCtrl.push('ConfigPage');
    }

    testPrinter() {
        let toast = this.toastCtrl.create({
            message: 'Test Invoice sent to printer',
            position: 'middle',
            showCloseButton: true
        });

        toast.present();
    }

    openAnalytics() {
        this.navCtrl.push('AnalyticsPage');
    }

}
