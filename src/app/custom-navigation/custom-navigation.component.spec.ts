import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNavigationComponent } from './custom-navigation.component';

describe('CustomNavigationComponent', () => {
  let component: CustomNavigationComponent;
  let fixture: ComponentFixture<CustomNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
