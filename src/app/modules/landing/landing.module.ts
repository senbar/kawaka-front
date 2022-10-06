import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class LandingModule { }
