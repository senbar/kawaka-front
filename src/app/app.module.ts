import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './pages/create/create.component';
import { RecipesListComponent } from './modules/core/recipes-list/recipes-list.component';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    Error404PageComponent,
    RecipesComponent,
    CreateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
