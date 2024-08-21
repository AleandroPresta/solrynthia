import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { ShowcaseLeftComponent } from './showcase-left/showcase-left.component';
import { ShowcaseRightComponent } from './showcase-right/showcase-right.component';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingComponent,
    ShowcaseLeftComponent,
    ShowcaseRightComponent,
    CustomFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'solrynthia';
}
