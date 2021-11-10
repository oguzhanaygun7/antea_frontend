import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-laser-hair',
  templateUrl: './services-laser-hair.component.html',
  styleUrls: ['./services-laser-hair.component.scss']
})
export class ServicesLaserHairComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
