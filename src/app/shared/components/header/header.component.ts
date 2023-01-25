import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() Left: { name: string, route: string } | undefined
  @Input() Right: { name: string, route: string } | undefined

  ngOnInit(): void {
  }

}
