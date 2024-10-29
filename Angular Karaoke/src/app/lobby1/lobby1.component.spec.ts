import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lobby1Component } from './lobby1.component';

describe('Lobby1Component', () => {
  let component: Lobby1Component;
  let fixture: ComponentFixture<Lobby1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lobby1Component] // Use declarations instead of imports
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lobby1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


