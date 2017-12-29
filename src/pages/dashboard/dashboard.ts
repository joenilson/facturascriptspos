import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ModalController} from 'ionic-angular';
import {StartCasherPage} from './../start-casher/start-casher';

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
        let moneyStart = this.moneyAtCasherModal();
        this.navCtrl.push('PosPage', { moneyAtStart: moneyStart});
    }
    
    moneyAtCasherModal(){
        let addWeatherModal = this.modalCtrl.create(StartCasherPage);
        addWeatherModal.present();
        addWeatherModal.onDidDismiss(data=>{ //This is a listener which wil get the data passed from modal when the modal's view controller is dismissed
            console.log("Data =>", data) //This will log the form entered by user in add modal.
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
