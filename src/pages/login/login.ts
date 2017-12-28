import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController, Loading, AlertController} from 'ionic-angular';
import {UserProvider} from '../../providers/user/user';
import {User} from '../../models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    myForm: FormGroup;

    public loading: Loading;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        private userProvider: UserProvider
    ) {
        this.myForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    userData = {"username": "", "password": "", "name": "", "email": ""};



    loginUser() {

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
        this.getItem();
        console.log('ionViewDidLoad LoginPage');
    }

}
