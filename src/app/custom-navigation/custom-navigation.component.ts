import { Component } from '@angular/core';
import { AccountIconComponent } from '../account-icon/account-icon.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-custom-navigation',
  standalone: true,
  imports: [
    AccountIconComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './custom-navigation.component.html',
  styleUrl: './custom-navigation.component.css'
})
export class CustomNavigationComponent {

}
