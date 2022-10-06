import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { map, observable, Observable, Subject, tap } from 'rxjs';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'kawaka';

  @ViewChild("outlet", { static: true })
  outlet!: RouterOutlet;

  routeAnimationState = new Subject<string>();

  constructor() {
  }

  ngOnInit() {
    this.outlet.activateEvents.pipe(map(x => {
      return this.outlet.activatedRouteData['animation']
    })).subscribe(this.routeAnimationState);
  }
}
