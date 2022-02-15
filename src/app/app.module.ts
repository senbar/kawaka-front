import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingModule } from './modules/landing/landing.module';
import { CoreModule } from './modules/core/core.module';
import { RecipesModule } from './modules/recipes/recipes.module';

@NgModule({
  imports: [
    LandingModule,
    AppRoutingModule,
    RecipesModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    RecipesComponent,
    Error404PageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
