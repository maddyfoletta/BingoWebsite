import { Routes } from '@angular/router';
import { CharitiesComponent } from './charities/charities.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'charities', component: CharitiesComponent},
    {path: 'home', component: HomePageComponent}
];