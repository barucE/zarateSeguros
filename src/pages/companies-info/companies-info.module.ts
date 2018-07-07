import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompaniesInfoPage } from './companies-info';

@NgModule({
  declarations: [
    CompaniesInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CompaniesInfoPage),
  ],
})
export class CompaniesInfoPageModule {}
