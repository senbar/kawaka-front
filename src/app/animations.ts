import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage => RecipesPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: "100vh",
          "overflow-y": "clip",
        })
      ]),
      query('.waves', [
        style({
          position: 'relative',
          bottom: 0,
          left: 0,
          width: '100%',
        })
      ]),
      query(':enter', [
        style({
          left: '-100%'
        })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('400ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('400ms ease-out', style({ left: '0%' }))
        ]),
        query('.waves', [
          animate('400ms ease-out', style({ left: '-100%', bottom: "-200%" }))
        ]),

      ]),
      query(':enter', animateChild()),
    ]),
    transition('RecipesPage => HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])]
  );
