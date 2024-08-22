import { Component } from '@angular/core';
import { CharactersLandingComponent } from "../characters-landing/characters-landing.component";
import { CharacterCardComponent } from "./character-card/character-card.component";
import { CharacterLeftSectionComponent } from './character-left-section/character-left-section.component';
import { Character } from '../Character';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [
    CharacterCardComponent,
    CharacterLeftSectionComponent
  ],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {

  characterList: Character[] = [
    new Character(
      'Character Name',
      'Character Description',
      '',
      'https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg',
      'https://ggayane.github.io/css-experiments/cards/dark_rider-title.png',
      'https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp'
    )
  ];
}
