import { Component } from '@angular/core';
import { LandscapesListComponent } from './landscapes-list/landscapes-list.component';
import { CustomNavigationComponent } from "../custom-navigation/custom-navigation.component";
import { CustomFooterComponent } from "../custom-footer/custom-footer.component";

@Component({
  selector: 'app-landscapes',
  standalone: true,
  imports: [
    LandscapesListComponent,
    CustomNavigationComponent,
    CustomFooterComponent
  ],
  templateUrl: './landscapes.component.html',
  styleUrl: './landscapes.component.css'
})
export class LandscapesComponent {

}
