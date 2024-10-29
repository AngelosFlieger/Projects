import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { votingSocketService } from '../votingsocket.service';
@Component({
  selector: 'cl-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  count: number=0;
  userInput: number = 0;
  constructor(private router: Router, private votingsocketService: votingSocketService) { 
    const storedCount = localStorage.getItem('count');
    this.count = storedCount ? parseFloat(storedCount) : 0;
  }
  ngOnInit(): void {
      //this.resetTotalSumdiv();
  }

  resetTotalSumdiv() {
    // Reset the totalSumdiv to 0
    this.count = 0;
    // Store the updated totalSumdiv in localStorage
    localStorage.setItem('count', this.count.toString());
  }
  sendMessage(userInput: number) {
    if(this.count === 0){
    this.votingsocketService.sendMessage(userInput);
   // this.userInput = 0;
    this.router.navigate(['/margotperforming']);
    this.count=1;
    localStorage.setItem('count', this.count.toString());
    }else if(this.count === 1) {
      this.votingsocketService.sendMessage(userInput);
   // this.userInput = 0;
    this.router.navigate(['/mamalakisperforming']);
    this.count=2;
    localStorage.setItem('count', this.count.toString());
    }
    else if(this.count === 2) {
      this.votingsocketService.sendMessage(userInput);
   // this.userInput = 0;
    this.router.navigate(['/host']);
    this.count=2;
    localStorage.setItem('count', this.count.toString());
    }
  }
  selectNumber(number: number) {
    this.votingsocketService.sendMessage(number);
    this.router.navigate(['/margotperforming']);
  }
}