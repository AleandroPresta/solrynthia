import { Component, Input } from '@angular/core';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { TaglineComponent } from '../../../tagline/tagline.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-character-left-section',
  standalone: true,
  imports: [CharacterCardComponent, TaglineComponent, NgFor],
  templateUrl: './character-left-section.component.html',
  styleUrl: './character-left-section.component.css'
})
export class CharacterLeftSectionComponent {

  @Input() name: string = 'Name';
  @Input() description: string = 'Description';
  @Input() pageUrl: string = '';
  @Input() coverImageUrl: string = "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg";
  @Input() titleImageUrl: string = "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png";
  @Input() cardImageUrl: string = "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp";
}
