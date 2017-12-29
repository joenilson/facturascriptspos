import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosPage } from './pos';

@NgModule({
  declarations: [
    PosPage,
  ],
  imports: [
    IonicPageModule.forChild(PosPage),
  ],
})
export class PosPageModule {}
