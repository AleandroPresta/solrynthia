import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landscape-card',
  standalone: true,
  imports: [],
  templateUrl: './landscape-card.component.html',
  styleUrl: './landscape-card.component.css'
})
export class LandscapeCardComponent {
  @Input() name: string = 'Lake of the Ozarks';
  @Input() pageUrl: string = 'www.google.com';
}
