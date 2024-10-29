import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenCommunication2Service } from '../screen-communication2.service';
@Component({
  selector: 'cl-mamalakisperforming',
  templateUrl: './mamalakisperforming.component.html',
  styleUrls: ['./mamalakisperforming.component.css']
})
export class MamalakisperformingComponent implements OnInit {

  constructor(private screenCommunication2Service: ScreenCommunication2Service,private router: Router) { 
    this.screenCommunication2Service.onEvent('redirect2', (path: string) => {
      this.router.navigate([path]);
    });
  }

  ngOnInit(): void {
  }

}
