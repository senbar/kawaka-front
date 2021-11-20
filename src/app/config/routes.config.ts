import { InjectionToken } from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths={
    kawaka: 'kawaka'
};

const routesNames={
    home: '',
    error404: '404'
}


export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    error404: `/${routesNames.error404}`
  }
}