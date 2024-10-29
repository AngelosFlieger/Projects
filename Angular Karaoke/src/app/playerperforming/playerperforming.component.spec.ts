import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerperformingComponent } from './playerperforming.component';

describe('PlayerperformingComponent', () => {
  let component: PlayerperformingComponent;
  let fixture: ComponentFixture<PlayerperformingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerperformingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerperformingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
