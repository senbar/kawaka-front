import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  showAbout = false;
  constructor() { }

  ngOnInit(): void {

  }
  AboutButtonClick($event: Event) {
    this.showAbout = !this.showAbout;

    const elementList = document.querySelectorAll('app-about');
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
