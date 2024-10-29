import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playersrating1Component } from './playersrating1.component';

describe('Playersrating1Component', () => {
  let component: Playersrating1Component;
  let fixture: ComponentFixture<Playersrating1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Playersrating1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playersrating1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
