import { Component, OnInit } from '@angular/core';
import { fadeAboutAnimation } from './fade-about.animation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations:[fadeAboutAnimation]
})
export class HomePageComponent implements OnInit {

  showAbout= false;
  constructor() { }

  ngOnInit(): void {

  }

}
