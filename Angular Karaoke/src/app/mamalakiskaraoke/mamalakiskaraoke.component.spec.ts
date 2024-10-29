import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamalakiskaraokeComponent } from './mamalakiskaraoke.component';

describe('MamalakiskaraokeComponent', () => {
  let component: MamalakiskaraokeComponent;
  let fixture: ComponentFixture<MamalakiskaraokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamalakiskaraokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MamalakiskaraokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
