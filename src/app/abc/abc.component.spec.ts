import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABCComponent } from './abc.component';

describe('ABCComponent', () => {
  let component: ABCComponent;
  let fixture: ComponentFixture<ABCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
