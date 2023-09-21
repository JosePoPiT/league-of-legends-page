import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadorCardsComponent } from './paginador-cards.component';

describe('PaginadorCardsComponent', () => {
  let component: PaginadorCardsComponent;
  let fixture: ComponentFixture<PaginadorCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadorCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
