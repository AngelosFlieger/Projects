import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cl-player2page7',
  templateUrl: './player2page7.component.html',
  styleUrls: ['./player2page7.component.css']
})
export class Player2page7Component {

  isButtonVisible = true;
  constructor(private router: Router) { }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  navigateToPage8() {
    this.router.navigate(['/player2randompick']);
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isButtonVisible = scrollPosition > 200; // Adjust this value based on when you want the button to become visible
  }
}
