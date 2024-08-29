import { Component, Input } from '@angular/core';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { TaglineComponent } from '../../../tagline/tagline.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-left-section',
  standalone: true,
  imports: [CharacterCardComponent, TaglineComponent, NgFor, RouterLink],
  templateUrl: './character-left-section.component.html',
  styleUrl: './character-left-section.component.css'
})
export class CharacterLeftSectionComponent {

  @Input() name!: string;
  @Input() slug!: string;
  @Input() description!: string;
  @Input() pageUrl!: string;
  @Input() coverImageUrl!: string;
  @Input() titleImageUrl!: string;
  @Input() cardImageUrl!: string;
}
