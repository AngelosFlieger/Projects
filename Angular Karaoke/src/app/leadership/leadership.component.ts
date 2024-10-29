import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'cl-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {
  totalSumdiv: number = 0;
  totalSumdiv2: number = 0;
  totalSumdiv3: number = 0;
  constructor(private route: ActivatedRoute, private router: Router,) { 
    const storedTotalSumdiv = localStorage.getItem('totalSumdiv');
    this.totalSumdiv = storedTotalSumdiv ? parseFloat(storedTotalSumdiv) : 0;

    const storedTotalSumdiv2 = localStorage.getItem('totalSumdiv2');
    this.totalSumdiv2 = storedTotalSumdiv2 ? parseFloat(storedTotalSumdiv2) : 0;

    const storedTotalSumdiv3 = localStorage.getItem('totalSumdiv3');
    this.totalSumdiv3 = storedTotalSumdiv3 ? parseFloat(storedTotalSumdiv3) : 0;
  }
  
  ngOnInit(): void {
    if (this.totalSumdiv === 0) {
    this.route.params.subscribe(params => {
      const receivedNumber = params['number'];
      console.log('Received number:', receivedNumber);
      this.totalSumdiv=receivedNumber;
      this.totalSumdiv2=0;
      this.totalSumdiv3=0;
      localStorage.setItem('totalSumdiv', this.totalSumdiv.toString());
      localStorage.setItem('totalSumdiv2', this.totalSumdiv2.toString());
      localStorage.setItem('totalSumdiv3', this.totalSumdiv3.toString());
      setTimeout(() => {
        this.navigateToNewPage();
      }, 8000);
      // Do something with the received number
    });
   }else if (this.totalSumdiv2 === 0) {
    this.route.params.subscribe(params => {
      const receivedNumber2 = params['number'];
      console.log('Received number:', receivedNumber2);
      this.totalSumdiv2=receivedNumber2;
      this.totalSumdiv3=0;
      localStorage.setItem('totalSumdiv2', this.totalSumdiv2.toString());
      localStorage.setItem('totalSumdiv3', this.totalSumdiv3.toString());
      setTimeout(() => {
        this.navigateToNewPage2();
      }, 8000);
      // Do something with the received number
    });
  }else if (this.totalSumdiv3 === 0) {
    this.route.params.subscribe(params => {
      const receivedNumber3 = params['number'];
      console.log('Received number:', receivedNumber3);
      this.totalSumdiv3=receivedNumber3;
      localStorage.setItem('totalSumdiv3', this.totalSumdiv3.toString());
      setTimeout(() => {
        //this.navigateToNewPage2();
      }, 8000);
      // Do something with the received number
    });
  }
   // this.resetTotalSumdiv();
  }

  private navigateToNewPage() {
    // Use the Router service to navigate to the new page
    this.router.navigate(['/margot-up-next']); // Adjust the route to your new page
  }

  private navigateToNewPage2() {
    // Use the Router service to navigate to the new page
    this.router.navigate(['/mamalakis-up-next']); // Adjust the route to your new page
  }

  resetTotalSumdiv() {
    // Reset the totalSumdiv to 0
    this.totalSumdiv = 0;
    this.totalSumdiv2 = 0;
    this.totalSumdiv3 = 0;
    // Store the updated totalSumdiv in localStorage
    localStorage.setItem('totalSumdiv', this.totalSumdiv.toString());
    localStorage.setItem('totalSumdiv2', this.totalSumdiv2.toString());
    localStorage.setItem('totalSumdiv3', this.totalSumdiv3.toString());
  }

}
