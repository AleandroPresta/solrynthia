import { Component, Input } from '@angular/core';
import { TaglineComponent } from '../tagline/tagline.component';

@Component({
  selector: 'app-showcase-left',
  standalone: true,
  imports: [TaglineComponent],
  templateUrl: './showcase-left.component.html',
  styleUrl: './showcase-left.component.css'
})
export class ShowcaseLeftComponent {

  @Input() title: string = 'Default title';
  @Input() description: string = 'Default description';
  @Input() imageUrl: string = '';

}
