import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css'
})
export class CharacterPageComponent implements OnInit {

  slug!: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params) => {
        this.slug = params['slug'];
      }
    )
  }

}
