import { Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { AboutusComponent } from './pages/components/aboutus/aboutus.component';
import { ContactComponent } from './pages/components/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutusComponent},
    { path: 'contact', component: ContactComponent},
];
