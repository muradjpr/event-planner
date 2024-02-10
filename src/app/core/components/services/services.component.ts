import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { settings } from '../../../core/constants/constants';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  title = settings.services.title
  subtitle = settings.services.subtitle
  services = settings.services.service
}
