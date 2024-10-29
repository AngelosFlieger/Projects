import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsUpNextComponent } from './is-up-next.component';

describe('IsUpNextComponent', () => {
  let component: IsUpNextComponent;
  let fixture: ComponentFixture<IsUpNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsUpNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsUpNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
