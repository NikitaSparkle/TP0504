import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delo1Component } from './delo1.component';

describe('Delo1Component', () => {
  let component: Delo1Component;
  let fixture: ComponentFixture<Delo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Delo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Delo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
