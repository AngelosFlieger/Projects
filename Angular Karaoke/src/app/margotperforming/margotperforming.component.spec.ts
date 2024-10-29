import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargotperformingComponent } from './margotperforming.component';

describe('MargotperformingComponent', () => {
  let component: MargotperformingComponent;
  let fixture: ComponentFixture<MargotperformingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MargotperformingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MargotperformingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
