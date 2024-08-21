import { Component } from '@angular/core';
import { CustomNavigationComponent } from "../custom-navigation/custom-navigation.component";
import { CustomFooterComponent } from '../custom-footer/custom-footer.component';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, CustomNavigationComponent, CustomFooterComponent, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
