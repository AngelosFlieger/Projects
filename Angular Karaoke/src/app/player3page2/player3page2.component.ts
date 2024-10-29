import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoinlobbyService } from '../joinlobby.service';
@Component({
  selector: 'cl-player3page2',
  templateUrl: './player3page2.component.html',
  styleUrls: ['./player3page2.component.css']
})
export class Player3page2Component implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router, private JoinlobbyService: JoinlobbyService) {}
  navigateToPage5() {
    this.router.navigate(['/page5']);
  }
  sendPhoto() {
    this.router.navigate(['/loading2']);
    // Logic to load and convert the photo to a string
    const photoData = '/assets/mamalakis.jpg';

    // Send the photo data to the server
    this.JoinlobbyService.sendMessage(photoData);
  }
}
