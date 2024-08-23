import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapesListComponent } from './landscapes-list.component';

describe('LandscapesListComponent', () => {
  let component: LandscapesListComponent;
  let fixture: ComponentFixture<LandscapesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandscapesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandscapesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
