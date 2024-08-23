import { Component, Input } from '@angular/core';
import { CharacterCardComponent } from "./character-card/character-card.component";
import { CharacterLeftSectionComponent } from './character-left-section/character-left-section.component';
import { Character } from '../Character';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [
    CharacterCardComponent,
    CharacterLeftSectionComponent,
    NgFor,
    NgClass
  ],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {
  @Input() charactersList: Character[] = [
    new Character(
      'The Cursed Mage',
      'A powerful sorcerer doomed by dark magic, battling both enemies and his own inner demons.',
      '',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/cursed_mage/cover.jpeg',
      '',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/cursed_mage/character.png'
    ),
    new Character(
      'The Lost Priest',
      'A wandering cleric seeking redemption, haunted by the echoes of a forgotten faith.',
      '',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/lost_priest/cover.jpeg',
      '',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/lost_priest/character.png'
    ),
    new Character(
      'The Shadow Huntress',
      'A stealthy assassin who moves like a whisper in the dark, wielding twin daggers with deadly precision.',
      '',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/shadow_huntress/cover.jpg',
      '',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/shadow_huntress/character.png'
    ),
    new Character(
      'The Flameborn Warrior',
      'A fierce warrior infused with the essence of fire, her very presence radiating heat and power.',
      '',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/flameborn_worrior/cover.jpg',
      '',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/flameborn_worrior/character.png'
    ),
  ];
}
