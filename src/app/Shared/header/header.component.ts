import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pageLinks = [
      {path: '/',   name: 'Home'},
      {path: '/about', name: 'About Me'},
      {path: '/mywork', name: 'My Work'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
