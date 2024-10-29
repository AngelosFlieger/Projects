import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player3page7Component } from './player3page7.component';

describe('Player3page7Component', () => {
  let component: Player3page7Component;
  let fixture: ComponentFixture<Player3page7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player3page7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Player3page7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
