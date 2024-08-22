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
  @Input() coverImageUrl: string = '';
  @Input() titleImageUrl: string = '';
  @Input() cardImageUrl: string = '';

}
