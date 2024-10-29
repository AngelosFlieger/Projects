// Second page component (e.g., lobbytable.component.ts)
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { JoinlobbyService } from '../joinlobby.service';
import { Socket } from 'ngx-socket-io';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cl-lobbytable',
  styleUrls: ['./lobbytable.component.css'],
  templateUrl: './lobbytable.component.html',
  // template: '<div [style.backgroundImage]="photoStyle"></div>',
  styles: [`
    .photo-container {
      position: absolute;
      left: 854px;
      top: 475px;
      width: 218px;
      height: 228.6341px;
      border-radius: 200px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 0px 0px 0.5504px 0px #4d88d5, 0px 0px 1.1008px 0px #4d88d5, 0px 0px 3.8528px 0px #4d88d5,
        0px 0px 7.7056px 0px #4d88d5, 0px 0px 13.2096px 0px #4d88d5, 0px 0px 23.1168px 0px #4d88d5;
    }
  `]
})
export class LobbytableComponent implements OnInit{
  buttonPressed: boolean = false;
  photo: string = '';
  photo2: string = '';
  photo3: string = '';
  photoStyle: string = '';
  constructor(private JoinlobbyService: JoinlobbyService) { 
  }
  onButtonClick() {
    // Set the flag to true indicating that the button has been pressed
    this.buttonPressed = true;
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
