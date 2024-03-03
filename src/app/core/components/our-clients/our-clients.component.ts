import { Component, Input } from '@angular/core';
import { settings } from '../../../core/constants/constants';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../../shared/components/star-rating/star-rating.component';

@Component({
  selector: 'app-our-clients',
  standalone: true,
  imports: [ CommonModule, StarRatingComponent],
  templateUrl: './our-clients.component.html',
  styleUrl: './our-clients.component.css'
})
export class OurClientsComponent {
  title = settings.ourClients.title
  subtitle = settings.ourClients.subtitle
  clients = settings.ourClients.clients
   rating: number = 3.5;
  get stars() {
    return Array(Math.floor(this.rating)).fill(0);
  }

}