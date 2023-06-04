import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delo2Component } from './delo2.component';

describe('Delo2Component', () => {
  let component: Delo2Component;
  let fixture: ComponentFixture<Delo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Delo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Delo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
