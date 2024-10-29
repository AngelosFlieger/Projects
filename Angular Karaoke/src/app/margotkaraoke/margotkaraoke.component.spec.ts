import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargotkaraokeComponent } from './margotkaraoke.component';

describe('MargotkaraokeComponent', () => {
  let component: MargotkaraokeComponent;
  let fixture: ComponentFixture<MargotkaraokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MargotkaraokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MargotkaraokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
