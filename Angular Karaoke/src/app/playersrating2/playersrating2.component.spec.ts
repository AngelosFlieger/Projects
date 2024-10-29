import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playersrating2Component } from './playersrating2.component';

describe('Playersrating2Component', () => {
  let component: Playersrating2Component;
  let fixture: ComponentFixture<Playersrating2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Playersrating2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playersrating2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
