import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { KawakaTitleComponent } from './components/kawaka-title/kawaka-title.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { NavButtonShieldComponent } from './components/nav-button-shield/nav-button-shield.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { TextFieldComponent } from './components/text-field/text-field.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    KawakaTitleComponent,
    NavButtonComponent,
    NavButtonShieldComponent,
    LoaderComponent,
    TextFieldComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    LoaderComponent,
    RouterModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    KawakaTitleComponent,
    NavButtonComponent,
    NavButtonShieldComponent,
    TextFieldComponent
  ]
})
export class SharedModule { }
