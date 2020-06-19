import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dragComponent } from './dragComponent.component';

describe('dragComponent', () => {
  let component: dragComponent;
  let fixture: ComponentFixture<dragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
