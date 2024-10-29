import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player2page7Component } from './player2page7.component';

describe('Player2page7Component', () => {
  let component: Player2page7Component;
  let fixture: ComponentFixture<Player2page7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player2page7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Player2page7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
