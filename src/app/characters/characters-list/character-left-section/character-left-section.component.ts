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

  @Input() characterName: string = 'Character Name';
  @Input() characterDescription: string = 'Character Description';
  @Input() characterPageUrl: string = '';
  @Input() characterCoverImageUrl: string = 'https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg';
  @Input() characterTitleImageUrl: string = 'https://ggayane.github.io/css-experiments/cards/dark_rider-title.png';
  @Input() characterImageUrl: string = 'https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp';


}
