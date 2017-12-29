import {Component} from '@angular/core';
import {App, MenuController} from 'ionic-angular';
//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the HeaderMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'header-menu',
    templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {

    constructor(
        //public authService: AuthServiceProvider,
        public menuCtrl: MenuController,
        public app: App) {
        console.log('Hello HeaderMenuComponent Component');
    }
    
    pageClicked(page){
        this.menuCtrl.close();
        this.app.getRootNavs()[0].setRoot(page);
    }

    logoutClicked() {
        console.log("Logout");
        //this.authService.logout();
        this.menuCtrl.close();
        this.app.getRootNavs()[0].setRoot(LoginPage);
    }

}
