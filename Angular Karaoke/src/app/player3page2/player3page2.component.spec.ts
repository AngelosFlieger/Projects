import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player3page2Component } from './player3page2.component';

describe('Player3page2Component', () => {
  let component: Player3page2Component;
  let fixture: ComponentFixture<Player3page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player3page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Player3page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
