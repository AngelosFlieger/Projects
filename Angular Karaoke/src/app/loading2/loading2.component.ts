import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenCommunication3Service } from '../screen-communication3.service';
@Component({
  selector: 'cl-loading2',
  templateUrl: './loading2.component.html',
  styleUrls: ['./loading2.component.css']
})
export class Loading2Component implements OnInit {

  constructor(private screenCommunication3Service: ScreenCommunication3Service, private router: Router) { 
    this.screenCommunication3Service.onEvent('redirect3', (path: string) => {
      this.router.navigate(['/player3page7']);
    });
  }
  ngOnInit() {
  }

}
