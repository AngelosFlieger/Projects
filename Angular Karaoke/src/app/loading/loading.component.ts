import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenCommunication3Service } from '../screen-communication3.service'; // Adjust the path

@Component({
  selector: 'cl-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private screenCommunication3Service: ScreenCommunication3Service, private router: Router) { 
    this.screenCommunication3Service.onEvent('redirect3', (path: string) => {
      this.router.navigate(['/player2page7']);
    });
  }
  ngOnInit() {
  }
  

}
