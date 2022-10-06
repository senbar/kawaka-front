import { createComponent } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoutesConfig } from "./config/routes.config";
import { HomePageComponent } from "./modules/landing/page/home-page.component";
import { CreateComponent } from "./pages/create/create.component";
import { Error404PageComponent } from "./pages/error404-page/error404-page.component";
import { RecipesComponent } from "./pages/recipes/recipes.component";


const routes: Routes = [
  { path: RoutesConfig.routesNames.recipes, component: RecipesComponent, data: { animation: 'RecipesPage' } },
  { path: RoutesConfig.routesNames.create, component: CreateComponent, data: { animation: 'CreatePage' } },
  { path: RoutesConfig.routesNames.home, component: HomePageComponent, data: { animation: 'HomePage' } },
  { path: RoutesConfig.routesNames.error404, component: Error404PageComponent },
  { path: "**", redirectTo: RoutesConfig.routes.error404 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
