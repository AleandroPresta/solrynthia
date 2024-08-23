import { Component } from '@angular/core';
import { LandscapeCardComponent } from "./landscape-card/landscape-card.component";

@Component({
  selector: 'app-landscapes-list',
  standalone: true,
  imports: [LandscapeCardComponent],
  templateUrl: './landscapes-list.component.html',
  styleUrl: './landscapes-list.component.css'
})
export class LandscapesListComponent {

}
