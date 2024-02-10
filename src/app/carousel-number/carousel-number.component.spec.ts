import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNumberComponent } from './carousel-number.component';

describe('CarouselNumberComponent', () => {
  let component: CarouselNumberComponent;
  let fixture: ComponentFixture<CarouselNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
