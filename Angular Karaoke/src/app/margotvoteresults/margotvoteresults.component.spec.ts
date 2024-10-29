import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargotvoteresultsComponent } from './margotvoteresults.component';

describe('MargotvoteresultsComponent', () => {
  let component: MargotvoteresultsComponent;
  let fixture: ComponentFixture<MargotvoteresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MargotvoteresultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MargotvoteresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
