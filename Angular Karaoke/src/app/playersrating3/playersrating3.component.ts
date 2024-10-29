import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenCommunication2Service } from '../screen-communication2.service';

@Component({
  selector: 'cl-playersrating3',
  templateUrl: './playersrating3.component.html',
  styleUrls: ['./playersrating3.component.css']
})
export class Playersrating3Component implements OnInit {

  constructor(private screenCommunication2Service: ScreenCommunication2Service,private router: Router) { 
    // this.screenCommunication2Service.onEvent('redirect2', (path: string) => {
    //   this.router.navigate([path]);
    // });
  }

  ngOnInit(): void {
  }
  navigateToYourPage() {
    this.router.navigate(['/your-page']);
  }

}
