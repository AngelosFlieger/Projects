import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { votingSocketService } from '../votingsocket.service';
@Component({
  selector: 'cl-mamalakisvoteresults',
  templateUrl: './mamalakisvoteresults.component.html',
  styleUrls: ['./mamalakisvoteresults.component.css']
})
export class MamalakisvoteresultsComponent implements OnInit {

  totalSum: number = 0;
  totalSumdiv2: number = 0;
  counter: number =0;
  receivedMessage: number = 0;
  constructor(private router: Router,  private votingsocketService: votingSocketService) {
    // const storedTotalSumdiv = localStorage.getItem('totalSumdiv');
    // this.totalSumdiv = storedTotalSumdiv ? parseFloat(storedTotalSumdiv) : 0;
    this.votingsocketService.getMessages().subscribe((message) => {
      if (typeof message === 'number' ){
      this.counter= this.counter+1;
      this.receivedMessage = message;
      this.totalSum= +message+this.totalSum;
      if(this.counter === 3){
        // this.totalSumdiv=(+parseFloat(message)+this.totalSum)/this.counter;
        this.totalSumdiv2=this.totalSum/3;
        // localStorage.setItem('totalSumdiv', this.totalSumdiv.toString());
        setTimeout(() => {
          this.navigateToNewPage();
        }, 8000);
      }
      }
    });
  }

  private navigateToNewPage() {
    // Use the Router service to navigate to the new page
    this.router.navigate(['/leadership', { number: (this.totalSumdiv2).toFixed(1) }]); // Adjust the route to your new page
  }
  ngOnInit(): void {
    //this.resetTotalSumdiv();
  }

  // Method to reset totalSumdiv
  resetTotalSumdiv() {
    // Reset the totalSumdiv to 0
    this.totalSumdiv2 = 0;

    // Store the updated totalSumdiv in localStorage
    localStorage.setItem('totalSumdiv', this.totalSumdiv2.toString());
  }
}
