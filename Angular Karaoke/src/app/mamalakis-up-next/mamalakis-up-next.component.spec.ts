import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamalakisUpNextComponent } from './mamalakis-up-next.component';

describe('MamalakisUpNextComponent', () => {
  let component: MamalakisUpNextComponent;
  let fixture: ComponentFixture<MamalakisUpNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamalakisUpNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MamalakisUpNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
