import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapesComponent } from './landscapes.component';

describe('LandscapesComponent', () => {
  let component: LandscapesComponent;
  let fixture: ComponentFixture<LandscapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandscapesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandscapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
