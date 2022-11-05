import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { KawakaTitleComponent } from './components/kawaka-title/kawaka-title.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { NavButtonShieldComponent } from './components/nav-button-shield/nav-button-shield.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    KawakaTitleComponent,
    NavButtonComponent,
    NavButtonShieldComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    KawakaTitleComponent,
    NavButtonComponent,
    NavButtonShieldComponent
  ]
})
export class SharedModule { }
