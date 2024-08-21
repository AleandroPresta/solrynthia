import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tagline',
  standalone: true,
  imports: [],
  templateUrl: './tagline.component.html',
  styleUrl: './tagline.component.css'
})
export class TaglineComponent {

  @Input() content: string = 'Default';

}
