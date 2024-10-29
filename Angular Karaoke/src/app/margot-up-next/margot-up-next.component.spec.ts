import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargotUpNextComponent } from './margot-up-next.component';

describe('MargotUpNextComponent', () => {
  let component: MargotUpNextComponent;
  let fixture: ComponentFixture<MargotUpNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MargotUpNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MargotUpNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
