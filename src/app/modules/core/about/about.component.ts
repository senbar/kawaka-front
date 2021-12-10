import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { fadeInAnimation } from './fade-about.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations:[fadeInAnimation]
})
export class AboutComponent implements OnInit {
  inViewPort=false;

  $intersection= new IntersectionObserver(()=>this.inViewPort=true);

  constructor() { }

  ngOnInit(): void {
    const targets = document.querySelectorAll(".about");
    this.$intersection.observe(targets[0]);
  }

}
