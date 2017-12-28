import {Injectable} from '@angular/core';
import { User } from './../../models/user';
import {BaseEntityProvider} from './../base-entity/base-entity';
import { DatabaseAccessProvider } from './../database-access/database-access';
import 'rxjs/add/operator/map';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider extends BaseEntityProvider<User> {

    constructor(private databaseAccessProvider: DatabaseAccessProvider) {
        super({
           databaseAccessProvider: databaseAccessProvider,
           blankDefaults: item => {
               item.id = '';
               item.username = 'nobody';
               item.fullname = 'John Doe';
               item.status = false;
               item.email = 'john@doe.com';
               item.usertype = 'casher';
               item.deleted = false;
           },
           databaseAccessKey: 'users'
        });
        console.log('Hello UserProvider Provider');
    }

}
