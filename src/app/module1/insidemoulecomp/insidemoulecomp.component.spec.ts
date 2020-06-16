import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidemoulecompComponent } from './insidemoulecomp.component';

describe('InsidemoulecompComponent', () => {
  let component: InsidemoulecompComponent;
  let fixture: ComponentFixture<InsidemoulecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsidemoulecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsidemoulecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
