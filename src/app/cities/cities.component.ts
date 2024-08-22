import { Component } from '@angular/core';
import { CustomNavigationComponent } from '../custom-navigation/custom-navigation.component';
import { CustomFooterComponent } from '../custom-footer/custom-footer.component';
import { TaglineComponent } from '../tagline/tagline.component';
import { CitiesListComponent } from './cities-list/cities-list.component';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [
    CustomNavigationComponent,
    CustomFooterComponent,
    TaglineComponent,
    CitiesListComponent
  ],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {

}
