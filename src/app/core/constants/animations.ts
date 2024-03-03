import { animate, state, style, transition, trigger } from "@angular/animations";

export const menu = trigger(
    // menu trigger namne
    'menuborder', [
        state('default', style({
            width: '0%',
        })),
        state('mouseover', style({
            width: '100%',
        })),
        state('mouseleave', style({
            width: '0%',
        })),
        transition('* => mouseover', animate('500ms ease-in-out')),
        transition('mouseover => mouseleave', animate('500ms ease-in-out')),
        transition('mouseleave => *', animate('500ms ease-in-out')),
    ]
)