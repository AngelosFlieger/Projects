import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player2randompickComponent } from './player2randompick.component';

describe('Player2randompickComponent', () => {
  let component: Player2randompickComponent;
  let fixture: ComponentFixture<Player2randompickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player2randompickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Player2randompickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
