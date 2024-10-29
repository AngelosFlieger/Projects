import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenCommunication2Service } from '../screen-communication2.service';
@Component({
  selector: 'cl-margotperforming',
  templateUrl: './margotperforming.component.html',
  styleUrls: ['./margotperforming.component.css']
})
export class MargotperformingComponent implements OnInit {

  constructor(private screenCommunication2Service: ScreenCommunication2Service,private router: Router) { 
    this.screenCommunication2Service.onEvent('redirect2', (path: string) => {
      this.router.navigate([path]);
    });
  }

  ngOnInit(): void {
  }

}
