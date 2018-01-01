import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosPage } from './pos';
import { PipesModule } from './../../pipes/pipes.module';

@NgModule({
  declarations: [
    PosPage,
  ],
  imports: [
    IonicPageModule.forChild(PosPage),
    PipesModule
  ],
})
export class PosPageModule {}
