import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-eyebrow-transplant',
  templateUrl: './services-eyebrow-transplant.component.html',
  styleUrls: ['./services-eyebrow-transplant.component.scss']
})
export class ServicesEyebrowTransplantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
