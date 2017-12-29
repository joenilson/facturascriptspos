import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, Loading, AlertController} from 'ionic-angular';
import {UserProvider} from '../../providers/user/user';
import {User} from '../../models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})

export class LoginPage {

    myForm: FormGroup;

    public loading: Loading;
    item: User;
    loaded: boolean;

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
        let userDetails = <User>{};
        userDetails.username = this.myForm.value.username;
        userDetails.fullname = (this.myForm.value.username === 'admin')?'Administrador':'Cajero de Turno';
        userDetails.usertype = (this.myForm.value.username === 'admin')?'admin':'cajero';
        userDetails.id = this.myForm.value.username;
        this.loaded = true;
        this.userProvider.save(userDetails);
        this.navCtrl.push('DashboardPage');
    }

    logout(){
        
    }

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
    
    }

    ionViewDidLoad() {
        
        console.log('ionViewDidLoad LoginPage');
    }

}
