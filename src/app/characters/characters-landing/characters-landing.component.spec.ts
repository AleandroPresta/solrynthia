import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersLandingComponent } from './characters-landing.component';

describe('CharactersLandingComponent', () => {
  let component: CharactersLandingComponent;
  let fixture: ComponentFixture<CharactersLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
