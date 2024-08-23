import { Component } from '@angular/core';
import { LandscapeCardComponent } from "./landscape-card/landscape-card.component";
import { Landscape } from '../Landscape';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-landscapes-list',
  standalone: true,
  imports: [LandscapeCardComponent, NgFor],
  templateUrl: './landscapes-list.component.html',
  styleUrl: './landscapes-list.component.css'
})
export class LandscapesListComponent {

  landscapes: Landscape[] = [
    new Landscape('Lake of Lumara', '', 'https://img.freepik.com/premium-photo/imaginary-landscapes_796443-992.jpg'),
    new Landscape('The Mystical Tower', '', 'https://e0.pxfuel.com/wallpapers/323/212/desktop-wallpaper-gray-building-illustration-ancient-babylon-toi-fantasy.jpg'),
    new Landscape('The Angel Statue', '', 'https://cdn.pixabay.com/photo/2022/06/03/13/40/fantasy-7240172_1280.jpg'),
    new Landscape('Thalindra\'s Cascade', '', 'https://blenderartists.org/uploads/default/original/4X/d/9/b/d9b2401e33c08300e2cffd0443a66273d5cccf2e.jpeg'),
  ];

}
