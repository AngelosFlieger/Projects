import { Component } from '@angular/core';
import { Router } from '@angular/router';
import type { OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'cl-page1',
  standalone: true,
  imports: [],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  constructor(private router: Router) {}
  navigateToPage2() {
    this.router.navigate(['/page2']);
  }
  navigateToPage3() {
    this.router.navigate(['/page3']);
  }
}