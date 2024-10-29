import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'cl-randompick',
  templateUrl: './randompick.component.html',
  styleUrls: ['./randompick.component.css']
})
export class RandompickComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToFinalLoby() {
    this.router.navigate(['/lobby-waiting-to-start']);
  }
}


// Import the Router at the top of your component


// Inject the Router in the constructor


// Use the router to navigate to the new page

