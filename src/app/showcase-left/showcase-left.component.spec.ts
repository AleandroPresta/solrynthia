import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseLeftComponent } from './showcase-left.component';

describe('ShowcaseLeftComponent', () => {
  let component: ShowcaseLeftComponent;
  let fixture: ComponentFixture<ShowcaseLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
