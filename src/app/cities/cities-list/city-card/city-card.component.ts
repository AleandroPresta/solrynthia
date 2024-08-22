import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.css'
})
export class CityCardComponent {

  @Input() cityName: string = 'Default City';
  @Input() cityImageURL: string = 'https://i.pinimg.com/originals/2e/79/df/2e79df3c169175e6fe4b0ecb02da74c5.jpg';

}
