import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JoinlobbyService } from '../joinlobby.service';

@Component({

  selector: 'cl-page4',
  standalone: true,
  imports: [],
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component {
  constructor(private router: Router) {}
  
   navigateToPage5() {
     this.router.navigate(['/page5']);
   }
  
}
