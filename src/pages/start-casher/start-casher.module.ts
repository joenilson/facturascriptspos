import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartCasherPage } from './start-casher';

@NgModule({
  declarations: [
    StartCasherPage,
  ],
  imports: [
    IonicPageModule.forChild(StartCasherPage),
  ],
  exports: [
    StartCasherPage
  ],
  entryComponents: [
        StartCasherPage
    ]
})
export class StartCasherPageModule {}
