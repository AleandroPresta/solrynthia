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
      'Description',
      '',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/cursed_mage/cover.jpeg',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/cursed_mage/title.png',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/cursed_mage/character.png'
    ),
    new Character(
      'The Lost Priest',
      'Description',
      '',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/lost_priest/cover.jpeg',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/lost_priest/title.png ',
      'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/lost_priest/character.png'
    ),
  ];
}
