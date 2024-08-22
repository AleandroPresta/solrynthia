import { Component } from '@angular/core';
import { CharactersLandingComponent } from './characters-landing/characters-landing.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CustomFooterComponent } from '../custom-footer/custom-footer.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CharactersLandingComponent,
    CharactersListComponent,
    CustomFooterComponent
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

}
