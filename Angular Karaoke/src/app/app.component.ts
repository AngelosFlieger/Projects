import { LobbytableComponent } from './lobbytable/lobbytable.component';
import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
@Component({
  entryComponents: [LobbytableComponent],
  selector: 'cl-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
