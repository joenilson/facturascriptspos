import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CasherPage } from './casher';

@NgModule({
  declarations: [
    CasherPage,
  ],
  imports: [
    IonicPageModule.forChild(CasherPage),
  ],
})
export class CasherPageModule {}
