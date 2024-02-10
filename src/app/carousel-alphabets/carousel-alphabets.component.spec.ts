import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAlphabetsComponent } from './carousel-alphabets.component';

describe('CarouselAlphabetsComponent', () => {
  let component: CarouselAlphabetsComponent;
  let fixture: ComponentFixture<CarouselAlphabetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselAlphabetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselAlphabetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
