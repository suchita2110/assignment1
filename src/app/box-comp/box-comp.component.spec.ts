import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCompComponent } from './box-comp.component';

describe('BoxCompComponent', () => {
  let component: BoxCompComponent;
  let fixture: ComponentFixture<BoxCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxCompComponent]
    });
    fixture = TestBed.createComponent(BoxCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
