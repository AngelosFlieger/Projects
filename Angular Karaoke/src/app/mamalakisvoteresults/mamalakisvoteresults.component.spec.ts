import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamalakisvoteresultsComponent } from './mamalakisvoteresults.component';

describe('MamalakisvoteresultsComponent', () => {
  let component: MamalakisvoteresultsComponent;
  let fixture: ComponentFixture<MamalakisvoteresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamalakisvoteresultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MamalakisvoteresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
