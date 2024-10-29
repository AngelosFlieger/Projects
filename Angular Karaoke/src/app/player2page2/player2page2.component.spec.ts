import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player2page2Component } from './player2page2.component';

describe('Player2page2Component', () => {
  let component: Player2page2Component;
  let fixture: ComponentFixture<Player2page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player2page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Player2page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
