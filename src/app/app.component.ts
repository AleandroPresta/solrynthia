import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { ShowcaseLeftComponent } from './showcase-left/showcase-left.component';
import { ShowcaseRightComponent } from './showcase-right/showcase-right.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingComponent,
    ShowcaseLeftComponent,
    ShowcaseRightComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'solrynthia';
}
