import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delo4Component } from './delo4.component';

describe('Delo4Component', () => {
  let component: Delo4Component;
  let fixture: ComponentFixture<Delo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Delo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Delo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
