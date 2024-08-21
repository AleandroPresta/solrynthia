import { Component } from '@angular/core';
import { CustomNavigationComponent } from '../custom-navigation/custom-navigation.component';
import { CustomFooterComponent } from "../custom-footer/custom-footer.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CustomNavigationComponent, CustomFooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
