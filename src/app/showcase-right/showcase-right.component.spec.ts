import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseRightComponent } from './showcase-right.component';

describe('ShowcaseRightComponent', () => {
  let component: ShowcaseRightComponent;
  let fixture: ComponentFixture<ShowcaseRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
