import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-prp',
  templateUrl: './services-prp.component.html',
  styleUrls: ['./services-prp.component.scss']
})
export class ServicesPrpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
