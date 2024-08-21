import { Component } from '@angular/core';
import { CustomNavigationComponent } from "../custom-navigation/custom-navigation.component";
import { PresentationComponent } from './presentation/presentation.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CustomNavigationComponent,
    PresentationComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
