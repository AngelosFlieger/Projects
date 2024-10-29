import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamalakisperformingComponent } from './mamalakisperforming.component';

describe('MamalakisperformingComponent', () => {
  let component: MamalakisperformingComponent;
  let fixture: ComponentFixture<MamalakisperformingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamalakisperformingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MamalakisperformingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
