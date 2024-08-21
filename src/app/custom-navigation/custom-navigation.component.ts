import { Component } from '@angular/core';
import { AccountIconComponent } from '../account-icon/account-icon.component';

@Component({
  selector: 'app-custom-navigation',
  standalone: true,
  imports: [
    AccountIconComponent
  ],
  templateUrl: './custom-navigation.component.html',
  styleUrl: './custom-navigation.component.css'
})
export class CustomNavigationComponent {

}
