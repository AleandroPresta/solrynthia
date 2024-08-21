import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomNavigationComponent } from '../custom-navigation/custom-navigation.component';
import { LandingComponent } from '../landing/landing.component';
import { ShowcaseLeftComponent } from '../showcase-left/showcase-left.component';
import { ShowcaseRightComponent } from '../showcase-right/showcase-right.component';
import { CustomFooterComponent } from '../custom-footer/custom-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomNavigationComponent,
    LandingComponent,
    ShowcaseLeftComponent,
    ShowcaseRightComponent,
    CustomFooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
