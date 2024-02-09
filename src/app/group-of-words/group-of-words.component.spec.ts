import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOfWordsComponent } from './group-of-words.component';

describe('GroupOfWordsComponent', () => {
  let component: GroupOfWordsComponent;
  let fixture: ComponentFixture<GroupOfWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupOfWordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupOfWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
