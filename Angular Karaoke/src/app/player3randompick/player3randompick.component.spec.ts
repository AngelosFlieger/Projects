import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player3randompickComponent } from './player3randompick.component';

describe('Player3randompickComponent', () => {
  let component: Player3randompickComponent;
  let fixture: ComponentFixture<Player3randompickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player3randompickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Player3randompickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
