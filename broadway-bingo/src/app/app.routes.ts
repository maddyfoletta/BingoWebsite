import { Routes } from '@angular/router';
import { CharitiesComponent } from './charities/charities.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RulesComponent } from './rules/rules.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'charities', component: CharitiesComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'rules', component: RulesComponent}
];