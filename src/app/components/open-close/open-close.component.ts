import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close',
  standalone: true,
  imports: [],
  templateUrl: './open-close.component.html',
  styleUrl: './open-close.component.css',
  animations: [
    trigger('hover', [
      state('default', style({
        width: '200px'
      })),
      state('mouseover', style({
        width: '500px',
      })),
      state('mouseleave', style({
        width: '200px',
      })),
      transition('default => mouseover', [animate('800ms ease-out',)]),
      transition('mouseover => mouseleave', [animate(300)]),
      transition('mouseleave => mouseover', [animate(300)]),
      transition('mouseleave => default', [animate(300)])
    ])
  ],
})
export class OpenCloseComponent {
  isOpen = true;
  prop = 'default'

  toggle() {
    this.isOpen = !this.isOpen;
  }
  onClick() {
    this.prop = 'mouseover'
  }
}
