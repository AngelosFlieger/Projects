import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ScreenCommunicationService } from '../screen-communication.service'; // Adjust the path
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'cl-is-up-next',
  templateUrl: './is-up-next.component.html',
  styleUrls: ['./is-up-next.component.css']
})
export class IsUpNextComponent {
  constructor(private screenCommunicationService: ScreenCommunicationService, private router: Router, private socket: Socket) { 
    this.screenCommunicationService.onEvent('redirect', (path: string) => {
      this.router.navigate([path]);
    });
  }


  // ngOnInit() {
  //   setTimeout(() => {
  //     this.router.navigate(['/karaoke-lyrics']); // Replace 'second-page' with the actual route of your second page
  //   }, 3000); // 5000 milliseconds (5 seconds)
  // }
}
