import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyWaitingToStartComponent } from './lobby-waiting-to-start.component';

describe('LobbyWaitingToStartComponent', () => {
  let component: LobbyWaitingToStartComponent;
  let fixture: ComponentFixture<LobbyWaitingToStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyWaitingToStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LobbyWaitingToStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
