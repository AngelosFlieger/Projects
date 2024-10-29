import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'cl-player3randompick',
  templateUrl: './player3randompick.component.html',
  styleUrls: ['./player3randompick.component.css']
})
export class Player3randompickComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToFinalLoby() {
    this.router.navigate(['/playerperforming2']);
  }
}
