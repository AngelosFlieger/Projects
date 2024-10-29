import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenCommunication2Service } from '../screen-communication2.service'; 

@Component({
  selector: 'cl-playerperforming2',
  templateUrl: './playerperforming2.component.html',
  styleUrls: ['./playerperforming2.component.css']
})
export class Playerperforming2Component implements OnInit {

  constructor(private screenCommunication2Service: ScreenCommunication2Service,private router: Router) { 
    this.screenCommunication2Service.onEvent('redirect2', (path: string) => {
      this.router.navigate(['/voting']);
    });
  }

  ngOnInit(): void {
  }
  navigateToYourPage() {
    this.router.navigate(['/your-page']);
  }

}
