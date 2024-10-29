import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoinlobbyService } from '../joinlobby.service';
import { ScreenCommunicationService } from '../screen-communication.service'; // Adjust the path
@Component({
  template: `
    <button (click)="redirectToSecondScreen()">Open Second Screen</button>
  `,
  selector: 'cl-lobby-waiting-to-start',
  templateUrl: './lobby-waiting-to-start.component.html',
  styleUrls: ['./lobby-waiting-to-start.component.css']
})
export class LobbyWaitingToStartComponent implements OnInit {

  buttonPressed: boolean = false;
  photo: string = '';
  photoStyle: string = '';
  constructor(private router: Router, private JoinlobbyService: JoinlobbyService, private screenCommunicationService: ScreenCommunicationService) { 
  }
  redirectToSecondScreen(): void {
    this.screenCommunicationService.emitEvent('redirect', '/karaoke-lyrics');
    this.router.navigate(['/playerperforming']);
  }
  onButtonClick() {
    // Set the flag to true indicating that the button has been pressed
    
    // this.screenCommunicationService.notifyButtonClicked();
  }
  begin() {
    this.router.navigate(['/playerperforming']);
  }
  ngOnInit() {
    // Subscribe to the socket messages
    this.JoinlobbyService.getMessage().subscribe((message: unknown) => {
      // Update the photo when a message is received
      if (typeof message === 'string') {
        this.photo = message;
      }
    });
  }

}



