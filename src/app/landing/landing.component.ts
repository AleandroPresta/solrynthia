import { Component } from '@angular/core';
import { CustomNavigationComponent } from "../custom-navigation/custom-navigation.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CustomNavigationComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
