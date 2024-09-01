import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../Character';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css'
})
export class CharacterPageComponent implements OnInit {

  slug!: string;
  character!: Character;

  charactersList: { [key: string]: Character } = {
    "cursed-mage": new Character(
      "The Cursed Mage",
      "cursed-mage",
      "A powerful sorcerer doomed by dark magic, battling both enemies and his own inner demons.",
      "",
      "https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/cursed_mage/cover.jpeg",
      "",
      "https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/cursed_mage/character.png"
    ),
    "lost-priest": new Character(
      "The Lost Priest",
      "lost-priest",
      "A wandering cleric seeking redemption, haunted by the echoes of a forgotten faith.",
      "",
      "https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/lost_priest/cover.jpeg",
      "",
      "https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/lost_priest/character.png"
    ),
    "shadow-huntress": new Character(
      "The Shadow Huntress",
      "shadow-huntress",
      "A stealthy assassin who moves like a whisper in the dark, wielding twin daggers with deadly precision.",
      "",
      "https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/shadow_huntress/cover.jpg",
      "",
      "https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/shadow_huntress/character.png"
    ),
    "flameborn-warrior": new Character(
      "The Flameborn Warrior",
      "flameborn-warrior",
      "A fierce warrior infused with the essence of fire, her very presence radiating heat and power.",
      "",
      "https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/flameborn_worrior/cover.jpg",
      "",
      "https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/solrynthria/characters/flameborn_worrior/character.png"
    )
  };

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params) => {
        this.slug = params['slug'];
      }
    )

    this.character = this.charactersList[this.slug];
    console.log(this.character);
  }

}
