import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CitiesComponent } from './cities/cities.component';
import { CharactersComponent } from './characters/characters.component';
import { LandscapesComponent } from './landscapes/landscapes.component';
import { CharacterPageComponent } from './characters/character-page/character-page.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'cities', component: CitiesComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'characters/:slug', component: CharacterPageComponent },
    { path: 'landscapes', component: LandscapesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
