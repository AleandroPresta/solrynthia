import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

  @Input() pageUrl!: string;
  @Input() coverImageUrl!: string;
  @Input() titleImageUrl!: string;
  @Input() cardImageUrl!: string;
  @Input() slug!: string;

}
