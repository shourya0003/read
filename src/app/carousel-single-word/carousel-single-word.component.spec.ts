import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSingleWordComponent } from './carousel-single-word.component';

describe('CarouselSingleWordComponent', () => {
  let component: CarouselSingleWordComponent;
  let fixture: ComponentFixture<CarouselSingleWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSingleWordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselSingleWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
