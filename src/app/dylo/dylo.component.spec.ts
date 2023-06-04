import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyloComponent } from './dylo.component';

describe('DyloComponent', () => {
  let component: DyloComponent;
  let fixture: ComponentFixture<DyloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
