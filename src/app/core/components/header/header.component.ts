import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { settings } from '../../../core/constants/constants';
import { menu } from '../../../core/constants/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger(
      // menu trigger namne
      'menuborder', [
          state('default', style({
              scale: '1'
          })),
          state('mouseover', style({
            scale: '1.05'
          })),
          state('mouseleave', style({
            scale: '1'
          })),
          transition('default => mouseover', animate(700)),
          transition('mouseover => mouseleave', animate(700)),
          transition('mouseleave => default', animate(700)),
      ]
  )
  ]
  
})
export class HeaderComponent implements OnInit{
  isOpen: boolean = false;
  menuItems = settings.menu
  bordertransition = 'default';
  openMenu() {
    console.log(this.isOpen);
    return this.isOpen = !this.isOpen    
  }

  ngOnInit(): void {
    
  }


}
