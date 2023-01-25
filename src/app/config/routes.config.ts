import { InjectionToken } from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
};

//todo fix this into typescript system
const routesNames = {
  home: '',
  error404: '404',
  recipes: 'recipes',
  create: 'create'
}


export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    error404: `/${routesNames.error404}`,
    view: `/${routesNames.recipes}`,
    create: `/${routesNames.create}`
  }
}
