import { Component, Input } from '@angular/core';
import { TaglineComponent } from '../tagline/tagline.component';

@Component({
  selector: 'app-showcase-right',
  standalone: true,
  imports: [
    TaglineComponent
  ],
  templateUrl: './showcase-right.component.html',
  styleUrl: './showcase-right.component.css'
})
export class ShowcaseRightComponent {
  @Input() title: string = 'Default title';
  @Input() description: string = 'Default description';
  @Input() imageUrl: string = '';
}
