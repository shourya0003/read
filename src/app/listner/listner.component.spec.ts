import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnerComponent } from './listner.component';

describe('ListnerComponent', () => {
  let component: ListnerComponent;
  let fixture: ComponentFixture<ListnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
