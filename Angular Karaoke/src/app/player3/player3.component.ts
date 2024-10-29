import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cl-player3',
  templateUrl: './player3.component.html',
  styleUrls: ['./player3.component.css']
})
export class Player3Component implements OnInit {

  ngOnInit(): void {
  }
  constructor(private router: Router) {}
  navigateToPage2() {
    this.router.navigate(['/player3page2']);
  }
  navigateToPage3() {
    this.router.navigate(['/page3']);
  }

}
