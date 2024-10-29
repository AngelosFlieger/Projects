import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { JoinlobbyService } from '../joinlobby.service';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { CommonModule } from '@angular/common';
import { ScreenCommunication3Service } from '../screen-communication3.service'; // Adjust the path

@Component({
  selector: 'cl-page5',
  standalone: true,
  imports: [],
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit{
  buttonPressed: boolean = false;
  photo: string = '';
  photo2: string = '';
  photo3: string = '';
  photoStyle: string = '';
  constructor(private router: Router, private JoinlobbyService: JoinlobbyService, private screenCommunication3Service: ScreenCommunication3Service) { 
  }
  onButtonClick() {
    // Set the flag to true indicating that the button has been pressed
    this.buttonPressed = true;
  }
  redirectToSecondScreen(): void {
    this.screenCommunication3Service.emitEvent('redirect3', '/page7');
    this.router.navigate(['/page6']);
  }
  navigateToPage6() {
    this.router.navigate(['/page6']);
  }
  ngOnInit() {
    // Subscribe to the socket messages
    this.JoinlobbyService.getMessage().subscribe((message: unknown) => {
      // Update the photo when a message is received
      if (typeof message === 'string' && message==='/assets/josephGonzalezIFgRcqHznqgUnspl.jpeg') {
        this.photo = message;
      }
      if (typeof message === 'string' && message==='/assets/margot-robbie.jpg') {
        this.photo2 = message;
      }
      if (typeof message === 'string' && message==='/assets/mamalakis.jpg') {
        this.photo3 = message;
      }
    });
  }
}
