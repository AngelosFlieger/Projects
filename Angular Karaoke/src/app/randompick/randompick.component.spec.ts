import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandompickComponent } from './randompick.component';

describe('RandompickComponent', () => {
  let component: RandompickComponent;
  let fixture: ComponentFixture<RandompickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandompickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandompickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
