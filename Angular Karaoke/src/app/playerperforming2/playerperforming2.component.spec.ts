import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playerperforming2Component } from './playerperforming2.component';

describe('Playerperforming2Component', () => {
  let component: Playerperforming2Component;
  let fixture: ComponentFixture<Playerperforming2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Playerperforming2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playerperforming2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
