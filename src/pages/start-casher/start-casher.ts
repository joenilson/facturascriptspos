import {Component} from '@angular/core';
import {IonicPage, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    form: FormGroup;

    constructor(public viewCtrl: ViewController, public formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            money: ['1000', Validators.compose([Validators.required, ])],
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad StartCasherPage');
    }

    public CloseModal() {
        this.viewCtrl.dismiss(this.form);
    }

}
