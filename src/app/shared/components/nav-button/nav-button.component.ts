import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {

  @Input()
  type: "left" | "right" | "down" | "" = "";

  @Input()
  size: "small" | "big" = "big";

  arrowString = {
    "left": '&#60;',
    "right": "&#62;",
    "down": "",
    "": "err"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
