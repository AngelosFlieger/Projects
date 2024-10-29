import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaraokeLyricsComponent } from './karaoke-lyrics.component';

describe('KaraokeLyricsComponent', () => {
  let component: KaraokeLyricsComponent;
  let fixture: ComponentFixture<KaraokeLyricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaraokeLyricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaraokeLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
