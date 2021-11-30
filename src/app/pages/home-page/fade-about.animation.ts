import { animate, state, style, transition, trigger } from "@angular/animations";

export const fadeAboutAnimation=
trigger('fadeAboutAnimation' ,[
    state("false", style({
        'display': 'none'
    })),
    state("true", style({
        'display': 'static'
    })),
    transition("*=>*",
    animate('0.1s'))

]);