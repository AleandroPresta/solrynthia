import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-custom-footer',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './custom-footer.component.html',
  styleUrl: './custom-footer.component.css'
})
export class CustomFooterComponent {

}
