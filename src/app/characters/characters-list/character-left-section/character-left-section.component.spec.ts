import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLeftSectionComponent } from './character-left-section.component';

describe('CharacterLeftSectionComponent', () => {
  let component: CharacterLeftSectionComponent;
  let fixture: ComponentFixture<CharacterLeftSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterLeftSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterLeftSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
