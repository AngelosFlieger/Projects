import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'cl-margot-up-next',
  templateUrl: './margot-up-next.component.html',
  styleUrls: ['./margot-up-next.component.css']
})
export class MargotUpNextComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.navigateToNewPage();
    }, 8000);
  }
  private navigateToNewPage() {
    // Use the Router service to navigate to the new page
    this.router.navigate(['/margotkaraoke']); // Adjust the route to your new page
  }
}
