import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JoinlobbyService } from '../joinlobby.service';
@Component({
  selector: 'cl-page2',
  standalone: true,
  imports: [],
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  constructor(private router: Router, private JoinlobbyService: JoinlobbyService) {}
  navigateToPage5() {
    this.router.navigate(['/page5']);
  }
  
  sendPhoto() {
    this.router.navigate(['/page5']);
    // Logic to load and convert the photo to a string
    const photoData = '/assets/josephGonzalezIFgRcqHznqgUnspl.jpeg';

    // Send the photo data to the server
    this.JoinlobbyService.sendMessage(photoData);
  }
}



