import { Component } from '@angular/core';
import { CustomNavigationComponent } from '../custom-navigation/custom-navigation.component';
import { CustomFooterComponent } from '../custom-footer/custom-footer.component';
import { ShowcaseLeftComponent } from '../showcase-left/showcase-left.component';
import { ShowcaseRightComponent } from '../showcase-right/showcase-right.component';
import { LandingComponent } from '../landing/landing.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomNavigationComponent,
    CustomFooterComponent,
    ShowcaseLeftComponent,
    ShowcaseRightComponent,
    LandingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
