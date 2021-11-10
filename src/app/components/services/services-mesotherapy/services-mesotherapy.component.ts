import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-mesotherapy',
  templateUrl: './services-mesotherapy.component.html',
  styleUrls: ['./services-mesotherapy.component.scss']
})
export class ServicesMesotherapyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
