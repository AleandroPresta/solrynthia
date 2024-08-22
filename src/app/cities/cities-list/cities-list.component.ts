import { Component, Input } from '@angular/core';
import { CityCardComponent } from './city-card/city-card.component';
import { City } from '../City';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cities-list',
  standalone: true,
  imports: [
    CityCardComponent,
    NgFor
  ],
  templateUrl: './cities-list.component.html',
  styleUrl: './cities-list.component.css'
})
export class CitiesListComponent {

  @Input() cities: City[] = [
    new City(
      'Harbor of Eldoria',
      'https://i.pinimg.com/originals/2e/79/df/2e79df3c169175e6fe4b0ecb02da74c5.jpg'
    ),
    new City(
      'Old Town',
      'https://rare-gallery.com/mocahbig/414100-Avant-Choi-fantasy-art-digital-art-fantasy-city.jpg'
    ),
    new City(
      'The White City',
      'https://blenderartists.org/uploads/default/original/4X/a/f/2/af24d9243cd682df3928a3e8eaad7a691f273dfb.png'
    ),
    new City(
      'Dracopolis',
      'https://img.goodfon.com/wallpaper/nbig/2/67/fentezi-art-fentezi-mir-fentezi-gorod-gorod-na-skalakh-art.webp'
    ),
    new City(
      'The City of the Sun',
      'https://i.etsystatic.com/41411880/r/il/74e7ae/4945931293/il_fullxfull.4945931293_4und.jpg'
    ),
  ]

}
