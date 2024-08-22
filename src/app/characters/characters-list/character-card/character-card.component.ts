import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

  @Input() characterPageUrl: string = '';
  @Input() characterCoverImageUrl: string = 'https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg';
  @Input() characterTitleImageUrl: string = 'https://ggayane.github.io/css-experiments/cards/dark_rider-title.png';
  @Input() characterImageUrl: string = 'https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp';


}
