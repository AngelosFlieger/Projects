import { ScreenCommunication2Service } from './../screen-communication2.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'cl-mamalakiskaraoke',
  templateUrl: './mamalakiskaraoke.component.html',
  styleUrls: ['./mamalakiskaraoke.component.css']
})
export class MamalakiskaraokeComponent implements OnInit {

  constructor(private router: Router, private screenCommunication2Service: ScreenCommunication2Service) { }
  @Output() videoEnded = new EventEmitter<void>();
  ngOnInit(): void {
  }
  navigateToFinalLoby() {
    this.router.navigate(['/lobby-waiting-to-start']);
  }
  // onVideoEnded(): void {
  //   this.screenCommunication2Service.emitEvent('redirect2', '/voting');
  //   // this.videoEnded.emit();
  // }
   redirectToSecondScreen(): void {
     this.screenCommunication2Service.emitEvent('redirect2', '/voting');
     this.router.navigate(['/mamalakisvoteresults']);
   }

}
