import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoinlobbyService } from '../joinlobby.service';
@Component({
  selector: 'cl-player2page2',
  templateUrl: './player2page2.component.html',
  styleUrls: ['./player2page2.component.css']
})
export class Player2page2Component implements OnInit {


  ngOnInit(): void {
  }

  constructor(private router: Router, private JoinlobbyService: JoinlobbyService) {}
  navigateToPage5() {
    this.router.navigate(['/page5']);
  }
  sendPhoto() {
    this.router.navigate(['/loading']);
    // Logic to load and convert the photo to a string
    const photoData = '/assets/margot-robbie.jpg';

    // Send the photo data to the server
    this.JoinlobbyService.sendMessage(photoData);
  }
}
