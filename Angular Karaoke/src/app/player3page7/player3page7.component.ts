import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'cl-player3page7',
  templateUrl: './player3page7.component.html',
  styleUrls: ['./player3page7.component.css']
})
export class Player3page7Component {

  isButtonVisible = true;
  constructor(private router: Router) { }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  navigateToPage8() {
    this.router.navigate(['/player3randompick']);
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isButtonVisible = scrollPosition > 200; // Adjust this value based on when you want the button to become visible
  }
}
