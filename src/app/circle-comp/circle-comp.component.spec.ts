import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCompComponent } from './circle-comp.component';

describe('CircleCompComponent', () => {
  let component: CircleCompComponent;
  let fixture: ComponentFixture<CircleCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleCompComponent]
    });
    fixture = TestBed.createComponent(CircleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
