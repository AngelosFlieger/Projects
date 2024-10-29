import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'cl-page6',
  standalone: true,
  imports: [],
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component {
  constructor(private router: Router) { }
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/page7']); // Replace 'second-page' with the actual route of your second page
    }, 1500); // 5000 milliseconds (5 seconds)
  }
}
