import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoreModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class LandingModule { }
