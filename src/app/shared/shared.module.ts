import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { KawakaTitleComponent } from './components/kawaka-title/kawaka-title.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    KawakaTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    KawakaTitleComponent
  ]
})
export class SharedModule { }
