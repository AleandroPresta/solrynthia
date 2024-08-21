import { Component } from '@angular/core';
import { TaglineComponent } from "../../tagline/tagline.component";

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [TaglineComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

}
