import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenCommunication2Service } from '../screen-communication2.service';

@Component({
  selector: 'cl-playersrating1',
  templateUrl: './playersrating1.component.html',
  styleUrls: ['./playersrating1.component.css']
})
export class Playersrating1Component implements OnInit {

  constructor(private screenCommunication2Service: ScreenCommunication2Service,private router: Router) { 
    // this.screenCommunication2Service.onEvent('redirect2', (path: string) => {
    //   this.router.navigate([path]);
    // });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.navigateToNewPage();
    }, 15000);
  }
  navigateToNewPage() {
    this.router.navigate(['/margotperforming']);
  }
}
