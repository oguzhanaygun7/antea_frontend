import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-beard-mustache-transplant',
  templateUrl: './services-beard-mustache-transplant.component.html',
  styleUrls: ['./services-beard-mustache-transplant.component.scss']
})
export class ServicesBeardMustacheTransplantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
