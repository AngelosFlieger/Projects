import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'cl-player2randompick',
  templateUrl: './player2randompick.component.html',
  styleUrls: ['./player2randompick.component.css']
})
export class Player2randompickComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToFinalLoby() {
    this.router.navigate(['/playerperforming2']);
  }
}

