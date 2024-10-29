import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playersrating3Component } from './playersrating3.component';

describe('Playersrating3Component', () => {
  let component: Playersrating3Component;
  let fixture: ComponentFixture<Playersrating3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Playersrating3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playersrating3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
