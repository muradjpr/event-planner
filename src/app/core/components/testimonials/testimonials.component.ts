import { Component } from '@angular/core';
import { settings } from '../../../core/constants/constants';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  title = settings.testimonials.title
  subtitle = settings.testimonials.subtitle
  services = settings.services.service
}
