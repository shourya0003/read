import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWordsComponent } from './carousel-words.component';

describe('CarouselWordsComponent', () => {
  let component: CarouselWordsComponent;
  let fixture: ComponentFixture<CarouselWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
