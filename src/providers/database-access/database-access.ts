import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DatabaseAccessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseAccessProvider {

  constructor(private storage: Storage) {
    console.log('Hello DatabaseAccessProvider Provider');
  }
  
  async get<T>(key: string) {
    const val = <T>(await this.storage.get(key));
    return val;
  }

  async remove(key: string) {
    await this.storage.remove(key);
    return true;
  }

  async set(key: string, val: any) {
    await this.storage.set(key, val);
    return true;
  }


}
