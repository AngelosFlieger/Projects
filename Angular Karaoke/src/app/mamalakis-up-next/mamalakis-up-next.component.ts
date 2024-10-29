import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cl-mamalakis-up-next',
  templateUrl: './mamalakis-up-next.component.html',
  styleUrls: ['./mamalakis-up-next.component.css']
})
export class MamalakisUpNextComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.navigateToNewPage();
    }, 8000);
  }
  private navigateToNewPage() {
    // Use the Router service to navigate to the new page
    this.router.navigate(['/mamalakiskaraoke']); // Adjust the route to your new page
  }

}
