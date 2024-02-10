import { settings } from '../../../core/constants/constants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  title = settings.statistics.title
  subtitle = settings.statistics.subtitle
}
