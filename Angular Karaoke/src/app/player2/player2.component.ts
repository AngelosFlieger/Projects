import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'cl-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {


  ngOnInit(): void {
  }
  constructor(private router: Router) {}
  navigateToPage2() {
    this.router.navigate(['/player2page2']);
  }
  navigateToPage3() {
    this.router.navigate(['/page3']);
  }

}
