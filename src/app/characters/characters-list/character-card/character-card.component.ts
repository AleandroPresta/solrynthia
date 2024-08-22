import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

  @Input() pageUrl: string = '';
  @Input() coverImageUrl: string = "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg";
  @Input() titleImageUrl: string = "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png";
  @Input() cardImageUrl: string = "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp";

}
