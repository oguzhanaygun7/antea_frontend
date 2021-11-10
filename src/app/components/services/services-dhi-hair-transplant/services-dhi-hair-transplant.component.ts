import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-dhi-hair-transplant',
  templateUrl: './services-dhi-hair-transplant.component.html',
  styleUrls: ['./services-dhi-hair-transplant.component.scss']
})
export class ServicesDhiHairTransplantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
