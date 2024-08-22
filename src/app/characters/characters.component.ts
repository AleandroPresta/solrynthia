import { Component } from '@angular/core';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CustomFooterComponent } from '../custom-footer/custom-footer.component';
import { CustomNavigationComponent } from "../custom-navigation/custom-navigation.component";

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CharactersListComponent,
    CustomFooterComponent,
    CustomNavigationComponent,
    CustomNavigationComponent
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

}
