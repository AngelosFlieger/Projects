import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenCommunication2Service } from '../screen-communication2.service'; // Adjust the path

@Component({
  selector: 'cl-playerperforming',
  templateUrl: './playerperforming.component.html',
  styleUrls: ['./playerperforming.component.css']
})
export class PlayerperformingComponent implements OnInit {
  constructor(private screenCommunication2Service: ScreenCommunication2Service,private router: Router) { 
    this.screenCommunication2Service.onEvent('redirect2', (path: string) => {
      this.router.navigate(['/playersrating1']);
    });
  }

  ngOnInit(): void {
  }
  navigateToYourPage() {
    this.router.navigate(['/your-page']);
  }
  // onVideoEnded() {
  //   // This method will be called when the video on the first page ends
  //   // Navigate to the desired page
  //   this.router.navigate(['/voting']); // Replace '/redirect' with the actual route
  // }
}
