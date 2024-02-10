import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { settings } from '../../../core/constants/constants';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../../core/components/hero/hero.component';
import { ServicesComponent } from '../../../core/components/services/services.component';
import { TestimonialsComponent } from '../../../core/components/testimonials/testimonials.component';
import { OurClientsComponent } from '../../../core/components/our-clients/our-clients.component';
import { FooterComponent } from '../../../core/components/footer/footer.component';
import { FooterTopComponent } from '../../../core/components/footer-top/footer-top.component';
import { StatisticsComponent } from '../../../core/components/statistics/statistics.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, HeroComponent, ServicesComponent, TestimonialsComponent, OurClientsComponent, FooterComponent, FooterTopComponent, StatisticsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  title = settings.services.title
  subtitle = settings.services.subtitle
  services = settings.services.service

  ngOnInit(): void {
    
  }

}
