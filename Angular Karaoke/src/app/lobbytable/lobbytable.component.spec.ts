import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbytableComponent } from './lobbytable.component';

describe('LobbytableComponent', () => {
  let component: LobbytableComponent;
  let fixture: ComponentFixture<LobbytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LobbytableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LobbytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
