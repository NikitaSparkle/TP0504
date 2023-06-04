import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xyz1Component } from './xyz1.component';

describe('Xyz1Component', () => {
  let component: Xyz1Component;
  let fixture: ComponentFixture<Xyz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Xyz1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Xyz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
