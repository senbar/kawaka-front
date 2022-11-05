import { animate, state, style, transition, trigger } from "@angular/animations";

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    state("false", style({
      'transform': 'translateX(-50%)',
      opacity: 0
    })),
    state("true", style({
      'transform': 'translateX(0%)',
      opacity: 1
    })),
    transition("false=>true",
      animate('1s'))

  ]);

export const fadeInAnimationFromRight =
  trigger('fadeInAnimationFromRight', [
    state("false", style({
      'transform': 'translateX(150%)',
      opacity: 0
    })),
    state("true", style({
      'transform': 'translateX(0%)',
      opacity: 1
    })),
    transition("false=>true",
      animate('1s'))

  ]);
