import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Intro   = 'Stefan Ayres';
  slogin  = 'Full Stack Web Developer & Designer'



  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    })


  }

}
