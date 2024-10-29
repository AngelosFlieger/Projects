// button.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  template: '<button (click)="navigateToPage()">Go to Page 2</button>',
  styles: ['button { cursor: pointer; }'],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  constructor(private router: Router) {}

  navigateToPage(): void {
    this.router.navigate(['/page2']); // Navigate to the desired route
  }
}
