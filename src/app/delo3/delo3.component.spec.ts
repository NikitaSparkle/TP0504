import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delo3Component } from './delo3.component';

describe('Delo3Component', () => {
  let component: Delo3Component;
  let fixture: ComponentFixture<Delo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Delo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Delo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
